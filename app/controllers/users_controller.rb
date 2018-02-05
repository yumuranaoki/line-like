class UsersController < ApplicationController
  #deviseがsign_inに飛ばしてくれる
  before_action :authenticate_user!, only: :show
  
  def show
  end
end
