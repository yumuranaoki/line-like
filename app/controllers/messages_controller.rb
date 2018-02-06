class MessagesController < ApplicationController
  def create
    message = current_user.messages.build(message_params)
    if message.save
      room_id = params.require(:message)[:room_id]
      room = Room.find(room_id).access_id
      redirect_to room_path(access_id: room)
    end
  end

    private

      def message_params
        params.require(:message).permit(:content, :room_id)
      end
end
