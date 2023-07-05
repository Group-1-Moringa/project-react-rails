class EnrollmentSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :student
  belongs_to :course
end