class StudentSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :enrollment_date
  belongs_to :instructor
  belongs_to :admin
  has_many :courses
end