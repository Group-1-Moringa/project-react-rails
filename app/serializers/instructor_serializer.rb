class InstructorSerializer < ActiveModel::Serializer
  attributes :id, :name, :email
  has_many :students
  has_many :courses
end