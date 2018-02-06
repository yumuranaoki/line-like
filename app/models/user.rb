class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_many :active_relationships, class_name:  "Relationship",
                                foreign_key: "follower_id",
                                dependent:   :destroy
  has_many :passive_relationships, class_name:  "Relationship",
                                  foreign_key: "followed_id",
                                  dependent:   :destroy
  has_many :followeds, through: :active_relationships
  has_many :followers, through: :passive_relationships

  has_many :active_room_relationships, class_name:  "RoomRelationship",
                                      foreign_key: "room_follower_id",
                                      dependent: :destroy
  has_many :followed_rooms, through: :active_room_relationships
  has_many :passive_user_relationships, class_name: "UserRelationship",
                                      foreign_key: "followed_user_id",
                                      dependent: :destroy
  has_many :user_followers, through: :passive_user_relationships

  validates :account_name, uniqueness: true
  validates :email, uniqueness: true


  #インスタンスメソッド
  #userのfollow
  def follow(other_user)
    active_relationships.create(followed_id: other_user.id)
  end

  def unfollow(other_user)
    active_relationships.find_by(followed_id: other_user.id).destroy
  end

  def following?(other_user)
    followeds.include?(other_user)
  end

  #roomのfollow
  def follow_room(other_room)
    active_room_relationships.create(followed_room_id: other_room.id)
  end

  def unfollow_room(other_room)
    active_room_relationships.find_by(followed_room_id: other_room.id).destroy
  end


  def following_room?(other_room)
    followed_rooms.include?(other_room)
  end
end
