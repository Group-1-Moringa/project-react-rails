class InstructorsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :no_records
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    
    def index
      instructors = Instructor.all
      render json: instructors
    end
  
    def create
      instructor = Instructor.create!(valid_params)
      render json: instructor, status: :created
    end
  
    def destroy
      instructor = finder
      instructor.destroy
      head :no_content
    end
  
    def show
      instructor = finder
      render json: instructor
    end
  
    def update
      instructor = finder
      instructor.update!(valid_params)
      render json: instructor, status: :accepted
    end
  
    private
  
    def finder
      Instructor.find(params[:id])
    end
  
    def valid_params
      params.permit(:name, :email, :password)
    end
  
    def no_records
      render json: { error: "Instructor not found" }, status: :not_found
    end
  
    def render_unprocessable_entity_response(invalid)
      render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
  end
  
