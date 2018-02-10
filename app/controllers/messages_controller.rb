class MessagesController < ApplicationController
  def index
    access_id = params[:access_id]
    room_id = Room.find_by(access_id: access_id).id
    messages = Message.where('room_id = room_id')
    render json: messages
  end

  def create
    message = current_user.messages.build(message_params)
    if message.save
      room_id = params.require(:message)[:room_id]
      room = Room.find(room_id)
      room_access_id = room.access_id
      room.update!(
        updated_at: Time.now
      )
      Notification.create(room_id: room.id, user_id: current_user.id)
      redirect_to room_path(access_id: room_access_id)
    end
  end

    private

      def message_params
        params.require(:message).permit(:content, :room_id)
      end
end
