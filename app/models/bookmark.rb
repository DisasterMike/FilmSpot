class Bookmark < ApplicationRecord
  belongs_to :user
  belongs_to :spot

  # Note validations
  validates :note, presence: true

  # Priority validations
  validates :priority, presence: true
  validates :priority, numericality: { only_integer: true }
end
