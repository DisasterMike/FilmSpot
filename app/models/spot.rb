class Spot < ApplicationRecord
  belongs_to :users
  has_many :bookings
  has_many :bookmarks
end
