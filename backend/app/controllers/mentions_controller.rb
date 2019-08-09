class MentionsController < ApplicationController
  # skip_before_action :authorized

  def create
    mentioned_user_id = User.find_by(name: params[:name]).id
    new_mention = Mention.create(user_id: mentioned_user_id, article_id: mention_params[:article_id])
    render json: new_mention
  end

  def destroy
    # debugger
    to_destroy = cur_user.mentions.find(params[:id])
    copy_for_render = to_destroy
    to_destroy.destroy
    render json: copy_for_render
  end

  private

  def mention_params
    params.permit(:article_id, :name)
  end
end
