class AddDetailsToGroupRelationships < ActiveRecord::Migration[5.1]
  def change
    add_column :group_relationships, :follower_id, :integer
    add_column :group_relationships, :followed_id, :integer
  end
  add_index :group_relationships, :follower_id
  add_index :group_relationships, :followed_id
  add_index :group_relationships, [:follower_id, :followed_id], unique: true
end
