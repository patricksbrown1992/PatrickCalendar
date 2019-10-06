class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.integer :user_id, null: false
      t.string :title, null: false
      t.datetime :start, null: false
      t.datetime :end, null: false
      t.string :theme
      t.text :description
      t.timestamps
    end
  end
end
