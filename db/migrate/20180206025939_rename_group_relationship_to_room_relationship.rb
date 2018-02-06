class RenameGroupRelationshipToRoomRelationship < ActiveRecord::Migration[5.1]
  def change
    rename_table :group_relationships, :room_relationships
  end
end
