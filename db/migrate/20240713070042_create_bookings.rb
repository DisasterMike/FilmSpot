class CreateBookings < ActiveRecord::Migration[7.1]
  def change
    create_table :bookings do |t|
      t.date :booking_date
      t.string :status
      t.references :users, null: false, foreign_key: true
      t.references :spots, null: false, foreign_key: true

      t.timestamps
    end
  end
end
