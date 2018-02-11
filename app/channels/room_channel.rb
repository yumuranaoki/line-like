class RoomChannel < ApplicationCable::Channel
  def subscribed
    #userごとにchannelをつくる
    stream_from "room_channel_#{params[:user_id]}"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def speak(data)
    #room = Room.find(2)
    #RoomChannel.broadcast_to(room, message: data['message'])
    #roomごとにchannelを作成する
    #room_idはクライアントサイドから送ってもらう
    logger.debug("speakのデバッグ : #{data}")
    #room_idの存在/非存在で場合分け
    if !data['room_id'].nil?
      message = Message.create( room_id: data['room_id'],
                                user_id: data['from_user_id'],
                                content: data['message'] )
      Room.find(data['room_id']).update( updated_at: Time.now )

      #相手用
      ActionCable.server.broadcast "room_channel_#{data['to_user_id']}", {message: data['message'],
                                                                          message_id: message.id,
                                                                          from_user_id: data['from_user_id'],
                                                                          to_user_id: data['to_user_id'],
                                                                          to_user_name: data['to_user_name'],
                                                                          from_user_name: data['from_user_name'],
                                                                          room_id: data['room_id']}
      #自分用
      ActionCable.server.broadcast "room_channel_#{data['from_user_id']}", {message: data['message'],
                                                                            message_id: message.id,
                                                                            from_user_id: data['from_user_id'],
                                                                            to_user_id: data['to_user_id'],
                                                                            to_user_name: data['to_user_name'],
                                                                            from_user_name: data['from_user_name'],
                                                                            room_id: data['room_id']}

    else
      room = Room.create()
      logger.debug(room.id)
      message = Message.create( room_id: room.id,
                                user_id: data['from_user_id'],
                                content: data['message'] )
      logger.debug(message.id)
      logger.debug(message.room_id)
      from_user = User.find(data['from_user_id'])
      to_user = User.find(data['to_user_id'])
      from_user.follow_room(room)
      to_user.follow_room(room)
      room.follow_user(from_user)
      room.follow_user(to_user)

      #相手用
      ActionCable.server.broadcast "room_channel_#{data['to_user_id']}", {message: data['message'],
                                                                          message_id: message.id,
                                                                          from_user_id: data['from_user_id'],
                                                                          to_user_id: data['to_user_id'],
                                                                          to_user_name: to_user.name,
                                                                          from_user_name: data['from_user_name'],
                                                                          room_id: room.id}
      #自分用
      ActionCable.server.broadcast "room_channel_#{data['from_user_id']}", {message: data['message'],
                                                                            message_id: message.id,
                                                                            from_user_id: data['from_user_id'],
                                                                            to_user_id: data['to_user_id'],
                                                                            to_user_name: to_user.name,
                                                                            from_user_name: data['from_user_name'],
                                                                            room_id: room.id}
    end
  end
end
