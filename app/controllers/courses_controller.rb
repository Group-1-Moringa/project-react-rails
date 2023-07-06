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