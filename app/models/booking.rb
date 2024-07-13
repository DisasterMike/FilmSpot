class Booking < ApplicationRecord
  belongs_to :users
  belongs_to :spots

  # date validations
  validates :date, presence: true

  # status validations
  validates :status, presence: true
  validates :category, inclusion: %w[accepted pending declined] # TODO: maybe change this later?
end
