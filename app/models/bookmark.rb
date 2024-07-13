class Bookmark < ApplicationRecord
  belongs_to :users
  belongs_to :spots

  # Note validations
  validates :note, presence: true

  # Priority validations
  validates :priority, presence: true
  validates :priority, numericality: { only_integer: true }
end
