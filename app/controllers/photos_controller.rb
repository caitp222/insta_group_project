require 'pry'
class PhotosController < ApplicationController

  def show
    photo = Photo.find_by(id: params[:id])
    render json: photo
  end

  def create
    # binding.pry

    encoded_string = params[:base64].split(',')[1]
    photo = Photo.new
    photo.set_image(encoded_string)
    photo.save
    render json: photo
    # photo = Photo.new(photo_params)
    # puts request
    # if request.xhr?
    #   if photo.save
    #     # redirect_to '/'
    #     render json: photo.photo.url
    #  else
    #     @errors = @photo.errors.full_messages
    #     puts @errors
    #   end
    # else
    #   render "Not an ajax request"
    # end
  end

  private
  def photo_params
    params.require(:photo).permit(:user_id, :photo, :blurb)
  end
end
