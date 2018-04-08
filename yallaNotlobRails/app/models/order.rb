class Order < ApplicationRecord
    enum order_type: [:Breakfast, :Lunch, :Dinner]
    enum status: [:waiting, :finished]
    has_many :order_item , dependent: :destroy
    has_many :order_invitation , dependent: :destroy

end
