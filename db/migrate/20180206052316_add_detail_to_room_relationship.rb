class AddDetailToRoomRelationship < ActiveRecord::Migration[5.1]
  def change
    add_column :room_relationships, :room_follower_id, :integer
    add_column :room_relationships, :followed_room_id, :integer
  end
end
