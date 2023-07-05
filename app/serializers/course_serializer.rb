class CourseSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :start_date, :end_date
  belongs_to :instructor
  has_many :students
end