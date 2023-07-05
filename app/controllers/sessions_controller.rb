class SessionsController < ApplicationController
  def student_login
    student = Student.find_by(email: params[:email])

    if student && student.authenticate(params[:password])
      # Generate and return a token or set a session for authentication
      render json: { message: "Student logged in successfully" }
    else
      render json: { error: "Invalid email or password" }, status: :unauthorized
    end
  end

  def instructor_login
    instructor = Instructor.find_by(email: params[:email])

    if instructor && instructor.authenticate(params[:password])
      # Generate and return a token or set a session for authentication
      render json: { message: "Instructor logged in successfully" }
    else
      render json: { error: "Invalid email or password" }, status: :unauthorized
    end
  end

  def admin_login
    admin = Admin.find_by(email: params[:email])

    if admin && admin.authenticate(params[:password])
      # Generate and return a token or set a session for authentication
      render json: { message: "Admin logged in successfully" }
    else
      render json: { error: "Invalid email or password" }, status: :unauthorized
    end
  end
end
