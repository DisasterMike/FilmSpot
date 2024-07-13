class Spot < ApplicationRecord
  belongs_to :users
  has_many :bookings
  has_many :bookmarks

  # name validations
  validates :name, presence: true
  validates :name, uniqueness: true # TODO: do we need this?

  # address validations
  validates :address, presence: true

  # description validations
  validates :description, presence: true

  # category validations
  validates :category, presence: true
  validates :category, inclusion: %w[park restaurant house other] # TODO: maybe change this later?
end
