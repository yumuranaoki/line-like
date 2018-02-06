class RoomsController < ApplicationController
  def show
    @room = Room.find_by(access_id: params[:access_id])
    redirect_for_stranger(@room)
  end

  def create
    room = Room.new(access_id: params[:access_id])
    invited = User.find(params[:user_id])
    if room.save
      current_user.follow_room(room)
      invited.follow_room(room)
      room.follow_user(current_user)
      room.follow_user(invited)
      redirect_to room_path(access_id: params[:access_id])
    end
  end

  def destroy
  end

    private

      def redirect_for_stranger(room)
        if !current_user.following_room?(room)
          flash[:danger] = "トークに参加できません"
          redirect_to you_path
        end
      end

end
