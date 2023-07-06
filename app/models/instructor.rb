class Instructor < ApplicationRecord
    has_many :students
    has_many :courses
  
    has_secure_password
  
    validates :name, presence: true
    validates :email, presence: true, uniqueness: true
    validates :password, presence: true, length: { minimum: 11 }
  end