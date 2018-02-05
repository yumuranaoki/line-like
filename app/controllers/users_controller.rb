class UsersController < ApplicationController
  #deviseがsign_inに飛ばしてくれる
  before_action :authenticate_user!
  def index
    @users = User.all
  end

  def show
    @user = current_user
    @access_id = SecureRandom::urlsafe_base64(64)
  end


  def following
  end

  def followers
  end

end
