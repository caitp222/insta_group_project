require 'pry'
class PhotosController < ApplicationController

  def index
    @photos = Photo.order('created_at desc')
    render json: @photos
  end

  def show
    photo = Photo.find_by(id: params[:id])
    render json: photo
  end

  def create
    # binding.pry
    encoded_string = params[:base64].split(',')[1]
    image_type = params[:base64].split(',')[0][5..-8]
    photo = Photo.new
    photo.set_image(image_type, encoded_string)
    puts params.keys
    photo.blurb = params[:blurb]
    photo.save
    render json: photo
  end

  private
  def photo_params
    params.require(:photo).permit(:user_id, :photo, :blurb)
  end
end
