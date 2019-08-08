class AuthController < ApplicationController

  def create
    user = User.find_by(name: params[:name])
    is_authenticated = user.authenticate(params[:password]) if user
    if is_authenticated
      render json: {token: encode_token(user)}
    else
      render json: {errors: ["wrong username or password"]}, status: 422
    end
    # debugger
  end

  # def test
  #   render json: "hello"
  # end

end
