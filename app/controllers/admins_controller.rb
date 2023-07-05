class AdminsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :no_records
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  
    def index
      admins = Admin.all
      render json: admins
    end
  
    def create
      admin = Admin.create!(valid_params)
      render json: admin, status: :created
    end
  
    def destroy
      admin = finder
      admin.destroy
      head :no_content
    end
  
    def show
      admin = finder
      render json: admin
    end
  
    def update
      admin = finder
      admin.update!(valid_params)
      render json: admin, status: :accepted
    end
  
    private
  
    def finder
      Admin.find(params[:id])
    end
  
    def valid_params
      params.permit(:name, :email, :password)
    end
  
    def no_records
      render json: { error: "Admin not found" }, status: :not_found
    end
  
    def render_unprocessable_entity_response(invalid)
      render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
  end
  
  class CoursesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :no_records
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  
    def index
      courses = Course.all
      render json: courses
    end
  
    def create
      course = Course.create!(valid_params)
      render json: course, status: :created
    end
  
    def destroy
      course = finder
      course.destroy
      head :no_content
    end
  
    def show
      course = finder
      render json: course
    end
  
    def update
      course = finder
      course.update!(valid_params)
      render json: course, status: :accepted
    end
  
    private
  
    def finder
      Course.find(params[:id])
    end
  
    def valid_params
      params.permit(:title, :description, :start_date, :end_date, :instructor_id)
    end
  
    def no_records
      render json: { error: "Course not found" }, status: :not_found
    end
  
    def render_unprocessable_entity_response(invalid)
      render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
  end
  
  class EnrollmentsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :no_records
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  
    def index
      enrollments = Enrollment.all
      render json: enrollments
    end
  
    def create
      enrollment = Enrollment.create!(valid_params)
      render json: enrollment, status: :created
    end
  
    def destroy
      enrollment = finder
      enrollment.destroy
      head :no_content
    end
  
    def show
      enrollment = finder
      render json: enrollment
    end
  
    def update
      enrollment = finder
      enrollment.update!(valid_params)
      render json: enrollment, status: :accepted
    end
  
    private
  
    def finder
      Enrollment.find(params[:id])
    end
  
    def valid_params
      params.permit(:student_id, :course_id)
    end
  
    def no_records
      render json: { error: "Enrollment not found" }, status: :not_found
    end
  
    def render_unprocessable_entity_response(invalid)
      render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
  end
  
  class InstructorsController < ApplicationController
  