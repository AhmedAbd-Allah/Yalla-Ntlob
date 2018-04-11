class OrderItemsController < ApplicationController
  before_action :set_order_item, only: [:show, :update, :destroy]

  # GET /order_items
  def index
    @order_items = OrderItem.where(order_id: request.headers["order-id"])
    @items_list = []
    @order_items.each do |i|
      @user = User.find(i[:user_id])
      @items_list.push({"item_id": i[:id] ,
        "user_id": @user[:id] ,
        "name": @user[:name] , "item": i[:item] ,
        "count": i[:count],
        "price": i[:price],
        "comment": i[:comment]})
    end
    render json: @items_list
  end

  # GET /order_items/1
  def show
    render json: @order_item
  end

  # POST /order_item
  def create
    @order_item = OrderItem.new(order_item_params)
    @order = Order.find(@order_item[:order_id])
    @user = User.find(@order_item[:user_id])
    if @order_item.save
      ActionCable.server.broadcast "orderitems_#{@order[:owner_id]}",{status:"add",item_id: "#{@order_item[:id]}" ,
      item: "#{@order_item[:item]}" , count: "#{@order_item[:count]}" ,
      price: "#{@order_item[:price]}" , comment: "#{@order_item[:comment]}",
      user_id: "#{@order_item[:user_id]}", name: "#{@user[:name]}"}
      render json: @order_item, status: :created, location: @order_item
    else
      render json: @order_item.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /order_items/1
  def update
    if @order_item.update(order_item_params)
      render json: @order_item
    else
      render json: @order_item.errors, status: :unprocessable_entity
    end
  end

  # DELETE /order_items/1
  def destroy
    @order = Order.find(@order_item[:order_id])
    @user = User.find(@order_item[:user_id])
    ActionCable.server.broadcast "orderitems_#{@order[:owner_id]}",{status:"delete" ,item_id: "#{@order_item[:id]}" ,
    item: "#{@order_item[:item]}" , count: "#{@order_item[:count]}" ,
    price: "#{@order_item[:price]}" , comment: "#{@order_item[:comment]}",
    user_id: "#{@order_item[:user_id]}", name: "#{@user[:name]}"}
    @order_item.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_order_item
      @order_item = OrderItem.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def order_item_params
      params.require(:order_item).permit(:order_id, :user_id, :item, :count, :price, :comment)
    end
end
