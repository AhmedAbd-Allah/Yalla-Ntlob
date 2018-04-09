class Order < ApplicationRecord
    enum order_type: [:Breakfast, :Lunch, :Dinner]
    enum status: [:Waiting, :Finished]
    has_many :order_item , dependent: :destroy
    has_many :order_invitation , dependent: :destroy

end
