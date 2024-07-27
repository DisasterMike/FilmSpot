class ChangeDailyRateTypeInSpot < ActiveRecord::Migration[7.1]
  def change
    change_column :spots, :daily_rate, :integer
  end
end
