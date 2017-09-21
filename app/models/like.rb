class Like < ActiveRecord::Base
  belongs_to :user, :photo
end
