class ApiController < ApplicationController
  #fetch apiからアクセス
  def user_rooms
    user = User.find_by(id: params[:id])
    rooms = user.followed_rooms
    user_room = []
    rooms.each do |room|
      tmp = {
        'id': room.id,
        'user': room.followed_users.where.not(id: user.id).first.name,
        'user_id': room.followed_users.where.not(id: user.id).first.id,
        'comment': (room.messages.last.content.length > 20) ? room.messages.last.content.slice(0,20) << '...' : room.messages.last.content
      }
      user_room << tmp
    end
    render json: user_room
  end

  #fetch apiからアクセス
  def user_talks
    user = User.find_by(id: params[:id])
    rooms = user.followed_rooms
    user_talks = []
    #ネストした配列を作成
    #messageがroomに紐付いていることが重要
    rooms.each do |room|
      room_talks = []
      room.messages.each do |message|
        mes_tmp = {
          'id': message.id,
          'user_id': message.user_id,
          'content': message.content
        }
        room_talks << mes_tmp
      end
      user_talks << room_talks
    end
    render json: user_talks
  end

  #fetch apiからアクセス
  def user_followings
    user = User.find_by(id: params[:id])
    followings = user.followeds.order("name")
    user_following = []
    followings.each do |following|
      tmp = {
        'id': following.id,
        'name': following.name
      }
      user_following << tmp
    end
    render json: user_following
  end
end
