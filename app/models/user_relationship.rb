class UserRelationship < ApplicationRecord
  belongs_to :user_follower, class_name: "Room"
  belongs_to :followed_user, class_name: "User"
  validates :user_follower, presence: true
  validates :followed_user, presence: true
end
