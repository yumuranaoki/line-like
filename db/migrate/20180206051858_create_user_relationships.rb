class CreateUserRelationships < ActiveRecord::Migration[5.1]
  def change
    create_table :user_relationships do |t|

      t.timestamps
    end
  end
end
