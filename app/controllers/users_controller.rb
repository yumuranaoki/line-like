class UsersController < ApplicationController
  #deviseがsign_inに飛ばしてくれる
  before_action :authenticate_user!

  def show
  end

  def following
  end
  
  def followers
  end
end
