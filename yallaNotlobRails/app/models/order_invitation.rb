class OrderInvitation < ApplicationRecord
  belongs_to :order
  belongs_to :user
  enum status: [:Pending, :Joined]
end
