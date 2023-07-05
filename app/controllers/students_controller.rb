class StudentsController < ApplicationController
 
    rescue_from ActiveRecord::RecordNotFound, with: :no_records
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  
    def index
      students = Student.all
      render json: students
    end
  
    def create
      student = Student.create!(valid_params)
      render json: student, status: :created
    end
  
    def destroy
      student = finder
      student.destroy
      head :no_content
    end
  
    def show
      student = finder
      render json: student
    end
  
    def update
      student = finder
      student.update!(valid_params)
      render json: student, status: :accepted
    end
  
    private
  
    def finder
      Student.find(params[:id])
    end
  
    def valid_params
      params.permit(:name, :email, :password, :enrollment_date, :instructor_id, :admin_id)
    end
  
    def no_records
      render json: { error: "Student not found" }, status: :not_found
    end
  
    def render_unprocessable_entity_response(invalid)
      render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
  end