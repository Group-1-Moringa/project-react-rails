Rails.application.routes.draw do
  
  get 'sessions/student_login'
  get 'sessions/instructor_login'
  get 'sessions/admin_login'
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
