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
  
  
