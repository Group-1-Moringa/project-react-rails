class AdminSerializer < ActiveModel::Serializer
  attributes :id, :name, :email
  has_many :students
  has_many :enrollments
end