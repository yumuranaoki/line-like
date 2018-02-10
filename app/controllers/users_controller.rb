class UsersController < ApplicationController
  #deviseがsign_inに飛ばしてくれる
  before_action :authenticate_user!, except: [:user_rooms, :user_talks]
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
    @user = current_user
    @rooms = @user.followed_rooms
    @access_id = SecureRandom::urlsafe_base64(64)
  end

  def user_rooms
    user = User.find_by(id: params[:user_id])
    rooms = user.followed_rooms
    user_room = []
    rooms.each do |room|
      tmp = {
        'id': room.id,
        'access_id': room.access_id,
        'user': room.followed_users.where.not(id: user.id).first.name,
        'comment': room.messages.last.content.slice(0,40)
      }
      user_room << tmp
    end
    render json: user_room
  end

  def user_talks
    user = User.find_by(id: params[:user_id])
    rooms = user.followed_rooms
    user_talks = []
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


  def following
  end

  def followers
  end

end
