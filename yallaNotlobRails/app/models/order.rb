class Order < ApplicationRecord
    enum order_type: [:Breakfast, :Lunch, :Dinner]
    enum status: [:waiting, :finished]
end
