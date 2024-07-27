class AddEndDateToBookings < ActiveRecord::Migration[7.1]
  def change
    add_column :bookings, :end_date, :date, null: false, default: Date.new(2024, 7, 27)
  end
end
