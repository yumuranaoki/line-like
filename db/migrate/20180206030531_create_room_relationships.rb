class CreateRoomRelationships < ActiveRecord::Migration[5.1]
  def change
    create_table :room_relationships do |t|
      t.integer :followed_id
      t.integer :follower_id

      t.timestamps
    end
    add_index :room_relationships, :follower_id
    add_index :room_relationships, :followed_id
    add_index :room_relationships, [:follower_id, :followed_id], unique: true
  end
end
