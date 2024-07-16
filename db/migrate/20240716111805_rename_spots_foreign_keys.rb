class RenameSpotsForeignKeys < ActiveRecord::Migration[7.1]
  def change
    rename_column :spots, :users_id, :user_id
  end
end
