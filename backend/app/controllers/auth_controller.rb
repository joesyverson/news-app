class AuthController < ApplicationController

  # def create
  #   user = User.find_by(name: params[:name])
  #   password = params[:password]
  #   is authenticated = user.authenticate(password) if user
  #   if is_authenticated
  #     render json: {token: encode_token(user)}
  #   else
  #     render json: {errors: ["wrong username or password"]}, status: 422
  #   end
  # end

  def test
    render json: hello
  end

end
