class Student < ApplicationRecord
  belongs_to :instructor
  belongs_to :admin
  has_many :enrollments
  has_many :courses, through: :enrollments

  has_secure_password

  validates :name, presence: true
  validates :email, presence: true, uniqueness: true
  validates :password, presence: true, length: { minimum: 11 }

  attribute :admin, :boolean, default: false
end