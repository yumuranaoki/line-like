class RoomsController < ApplicationController
  def show
  end

  def create
    room = Room.new(access_id: params[:access_id])
    logger.debug(params[:access_id])
    if room.save
      logger.debug("トーク作成")
      redirect_to room_path(access_id: params[:access_id])
    end
  end

  def destroy
  end

end
