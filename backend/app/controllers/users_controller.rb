class UsersController < ApplicationController
  skip_before_action :authorized, only: :create

  def create
    # debugger
    user = User.create(user_params)
    if user.valid?
      render json: {token: encode_token(user)}
    else
      render json: {errors: user.errors.full_messages}, status: 422
    end
  end

  def profile
    # debugger
    render json: cur_user, include: "**"
  end

  private

  def user_params
    params.permit(:name, :password, :location_id, :email, :age)
  end

end
