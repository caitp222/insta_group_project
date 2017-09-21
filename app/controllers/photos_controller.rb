class PhotosController < ApplicationController

  def show
    photo = Photo.find_by(id: params[:id])
    render json: photo
  end
end