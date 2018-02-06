class AddDetailToUserRelationships < ActiveRecord::Migration[5.1]
  def change
    add_column :user_relationships, :user_follower_id, :integer
    add_column :user_relationships, :followed_user_id, :integer
  end
end
