class Booking < ApplicationRecord
  belongs_to :user
  belongs_to :spot

  # date validations
  validates :booking_date, presence: true

  # status validations
  validates :status, presence: true
  validates :status, inclusion: %w[accepted pending declined canceled]
end
