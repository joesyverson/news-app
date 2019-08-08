class UsersController < ApplicationController

  def create
    user = User.create(user_params)
    debugger
    if user.valid?
      render json: {token: encode_token(user)}
    else
      render json: {errors: user.errors.full_messages}, status: 422
    end
  end

  # def profile
  #   render json: current_user
  # end

  private

  def user_params
    params.permit(:name, :password, :location_id, :email, :age)
  end

end
