require 'pry'
class PhotosController < ApplicationController

  def show
    photo = Photo.find_by(id: params[:id])
    render json: photo
  end

  def create
    encoded_string = params[:base64].split(',')[1]
    photo = Photo.new
    photo.set_image(encoded_string)
    photo.save
    render json: photo
  end

  private
  def photo_params
    params.require(:photo).permit(:user_id, :photo, :blurb)
  end
end
