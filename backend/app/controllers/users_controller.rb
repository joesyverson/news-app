class UsersController < ApplicationController
  skip_before_action :authorized, only: :create

  def create # signup
    # debugger
    user = User.create(user_params)
    if user.valid?
      render json: {token: encode_token(user)}
    else
      render json: {errors: user.errors.full_messages}, status: 422
    end
  end

  def show
    user_to_show = User.find(params[:id])
    render json: user_to_show, include: "**"
  end

  def update
    cur_user.update(user_params)
    render json: cur_user, include: "**"
  end

  def destroy
    deleted_user = cur_user
    cur_user.destroy
    render json: "#{cur_user.name destroyed}"
  end

  def profile
    render json: cur_user, include: "**"
  end

  def follow
    follower = cur_user
    followee = User.find(params[:id])
    followee.followers << follower
    render json: cur_user, include: "**"
  end

  def unfollow
    # debugger
    followee = User.find(params[:id])
    follower = cur_user
    follower.followed_users.find_by(followee_id: followee.id).destroy
  end

  private

  def user_params
    params.permit(:name, :password, :location_id, :email, :age)
  end

end
