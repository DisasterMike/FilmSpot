class RenameForiegnKeyForBookingsAgain < ActiveRecord::Migration[7.1]
  def change
    rename_column :bookings, :spots_id, :spot_id
  end
end
