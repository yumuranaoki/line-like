class RoomsController < ApplicationController
  def show
    @room = Room.find_by(access_id: params[:access_id])
    @room.others_notification(current_user).destroy_all
    redirect_for_stranger(@room)
  end

  def create
    flag = true
    exiting_room = ''
    invited = User.find(params[:user_id])
    if !current_user.followed_rooms.empty?
      current_user.followed_rooms.each do |r|
        if r.following_user?(invited)
          logger.debug("デバッグ1: #{r.id}")
          flag = false
          exiting_room = r
          logger.debug("デバッグ1: #{exiting_room.access_id}")
          break
        end
      end
    end

    if flag == false
      access_id = exiting_room.access_id
      redirect_to room_path(access_id: access_id)
    else
      room = Room.new(access_id: params[:access_id])
      if room.save
        current_user.follow_room(room)
        invited.follow_room(room)
        room.follow_user(current_user)
        room.follow_user(invited)
        redirect_to room_path(access_id: params[:access_id])
      end
    end
  end

  def destroy
  end

  def react
  end

    private

      def redirect_for_stranger(room)
        if !current_user.following_room?(room)
          flash[:danger] = "トークに参加できません"
          redirect_to you_path
        end
      end

end
