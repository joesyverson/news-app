class UsersController < ApplicationController
  skip_before_action :authorized, only: :create

  def create # signup
    # debugger
    user = User.create(user_params)
    if user.valid?
      render json: {token: encode_token(user)}
    else
      render json: {errors: "there were errors"}, status: 422
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
    # deleted_user = cur_user
    # debugger
    cur_user.destroy
    render json: "DESTROYED"
  end

  def profile
    # debugger
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
    params.permit(:name, :password, :location, :email, :age)
  end

end
