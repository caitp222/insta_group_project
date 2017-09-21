class PhotosController < ApplicationController

  def show
    photo = Photo.find_by(id: params[:id])
    render json: photo
  end

  def create
    @photo = Photo.new(photo_params)
    if @photo.save
      redirect_to '/'
      # render :json @photo.photo.url
    else
      @errors = @photo.errors.full_messages
      puts @errors
    end

  end

  private
  def photo_params
    params.require(:photo).permit(:user_id, :photo, :blurb)
  end
end