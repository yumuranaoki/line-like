class Room < ApplicationRecord
  has_many :passive_room_relationships, class_name:  "RoomRelationship",
                                      foreign_key: "followed_room_id",
                                      dependent: :destroy
  has_many :room_followers, through: :passive_room_relationships
  has_many :active_user_relationships, class_name: "UserRelationship",
                                      foreign_key: "user_follower_id",
                                      dependent: :destroy
  has_many :followed_users, through: :active_user_relationships

  #userのfollow
  def follow_user(other_user)
    active_user_relationships.create(followed_user_id: other_user.id)
  end

  def unfollow_user(other_user)
    active_user_relationships.find_by(followed_user_id: other_user.id).destroy
  end

  def following_user?(other_user)
    followed_users.include?(other_user)
  end

end
