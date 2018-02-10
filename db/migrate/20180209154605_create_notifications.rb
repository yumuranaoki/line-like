class CreateNotifications < ActiveRecord::Migration[5.1]
  def change
    create_table :notifications do |t|
      t.boolean :read
      t.references :room, foreign_key: true

      t.timestamps
    end
  end
end
