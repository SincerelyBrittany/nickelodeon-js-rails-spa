class CreateCharacters < ActiveRecord::Migration[6.0]
  def change
    create_table :characters do |t|
      t.string :name
      t.string :actor
      t.string :ally
      t.string :enemy
      t.string :image
      t.belongs_to :show, null: false, foreign_key: true

      t.timestamps
    end
  end
end
