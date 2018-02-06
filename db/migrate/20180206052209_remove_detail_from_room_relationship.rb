class RemoveDetailFromRoomRelationship < ActiveRecord::Migration[5.1]
  def change
    remove_column :room_relationships, :followed_id, :integer
    remove_column :room_relationships, :follower_id, :integer
  end
end
