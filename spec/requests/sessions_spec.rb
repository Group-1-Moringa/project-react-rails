require 'rails_helper'

RSpec.describe "Sessions", type: :request do
  describe "GET /student_login" do
    it "returns http success" do
      get "/sessions/student_login"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /instructor_login" do
    it "returns http success" do
      get "/sessions/instructor_login"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /admin_login" do
    it "returns http success" do
      get "/sessions/admin_login"
      expect(response).to have_http_status(:success)
    end
  end

end
