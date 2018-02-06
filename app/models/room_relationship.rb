class RoomRelationship < ApplicationRecord
  belongs_to :room_follower, class_name: "User"
  belongs_to :followed_room, class_name: "Room"
  validates :room_follower_id, presence: true
  validates :followed_room_id, presence: true
end
