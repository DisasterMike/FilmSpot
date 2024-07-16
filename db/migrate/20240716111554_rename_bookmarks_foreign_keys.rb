class RenameBookmarksForeignKeys < ActiveRecord::Migration[7.1]
  def change
    rename_column :bookmarks, :users_id, :user_id
    rename_column :bookmarks, :spots_id, :spot_id
  end
end
