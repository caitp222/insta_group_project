class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    user = User.new
    if user.save
      render json: user
    else
      redirect 'new'
    end
  end

  def show
    user = User.find(params[:id])
    render json: user
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :password)
  end

end