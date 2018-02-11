class UsersController < ApplicationController
  #deviseがsign_inに飛ばしてくれる
  before_action :authenticate_user!, except: [:user_rooms, :user_talks, :user_followings]
  def search
    keyword = params[:search]
    logger.debug("デバッグ: #{keyword}")
    all_followers = current_user.followers

    #whereで書き換える。ここから
    @followers = []
    all_followers.each do |follower|
      if !current_user.following?(follower)
        @followers << follower
      end
    end
    #whereで書き換える。ここまで

    if keyword
      @user = User.find_by(account_name: keyword) || nil
      render 'search'
    end
  end

  def index
    @users = User.all
  end

  def show
    #@user = current_user
    #@rooms = @user.followed_rooms
    #@access_id = SecureRandom::urlsafe_base64(64)
  end



  def following
  end

  def followers
  end

end
