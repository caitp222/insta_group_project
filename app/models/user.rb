class User < ActiveRecord::Base
  has_many :photos, :comments, :likes

  # has_many :relationships, foreign_key: :following_id
  # has_many :followings, through: :relationships, source: :user

  has_secure_password
end
