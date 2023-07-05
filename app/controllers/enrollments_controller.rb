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
  