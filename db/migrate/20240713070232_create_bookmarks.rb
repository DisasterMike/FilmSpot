class CreateBookmarks < ActiveRecord::Migration[7.1]
  def change
    create_table :bookmarks do |t|
      t.string :note
      t.integer :priority
      t.references :users, null: false, foreign_key: true
      t.references :spots, null: false, foreign_key: true

      t.timestamps
    end
  end
end
