class RemoveRoomRelationships < ActiveRecord::Migration[5.1]
  def change
    drop_table :room_relationships
  end
end
