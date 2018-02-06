class RoomsController < ApplicationController
  def show
  end

  def create
=begin
    room = Room.new(access_id: params[:access_id])
    if room.save
      redirect_to room_path(access_id: params[:access_id])
    end
=end
  end

  def destroy
  end

end
