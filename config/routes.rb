Rails.application.routes.draw do

  get 'sessions/student_login'
  get 'sessions/instructor_login'
  get 'sessions/admin_login'
  # Students
  resources :students, only: [:index, :show, :destroy, :create, :update]
  
  # Instructors
  resources :instructors, only: [:index, :show, :destroy, :create, :update]

  # Admins
  resources :admins, only: [:index, :show, :destroy, :create, :update]

  # Courses
  resources :courses, only: [:index, :show, :destroy, :create, :update]

  # Enrollments
  resources :enrollments, only: [:index, :show, :destroy, :create, :update]

  resources :password_resets, only: [:new, :create, :edit, :update]
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
