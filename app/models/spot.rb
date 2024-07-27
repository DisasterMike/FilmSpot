include PgSearch::Model
class Spot < ApplicationRecord

  pg_search_scope :search_by_name_address_category,
  against: [ :name, :address, :category ],
  using: {
    tsearch: { prefix: true } # <-- now `superman batm` will return something!
  }

  has_one_attached :photo
  belongs_to :user
  has_many :bookings, dependent: :destroy
  has_many :bookmarks, dependent: :destroy

  # name validations
  validates :name, presence: true
  validates :name, uniqueness: true # TODO: do we need this?

  # address validations
  validates :address, presence: true

  # description validations
  validates :description, presence: true

  # category validations
  validates :category, presence: true
  # validates :category, inclusion: %w[park restaurant house other]

  # Geocode searches through address & some validation
  geocoded_by :address
  after_validation :geocode, if: :will_save_change_to_address?
end
