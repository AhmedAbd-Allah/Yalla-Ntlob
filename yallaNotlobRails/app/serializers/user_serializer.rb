class UserSerializer < ActiveModel::Serializer
    attributes :id, :name, :email, :image, :created_at, :updated_at
end
