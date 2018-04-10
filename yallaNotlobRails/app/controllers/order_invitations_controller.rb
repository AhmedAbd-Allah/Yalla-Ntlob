class OrderInvitationsController < ApplicationController
  before_action :set_order_invitation, only: [:show, :update, :destroy]

  # GET /order_invitations
  def index
    @order_invitations = OrderInvitation.where(order_id: request.headers["order-id"])
    @invitation_list = []
    @order_invitations.each do |i|
      @user = User.find(i[:user_id])
      @invitation_list.push({"id": @user[:id] ,
        "name": @user[:name] , "email": @user[:email] ,
        "image": @user[:image],
        "status": i[:status]})
    end
    render json: @invitation_list
    end

  # GET /order_invitations/1
  def show
    render json: @order_invitation
  end

  # POST /order_invitations
  def create
    @order_invitation = OrderInvitation.new(order_invitation_params)

    if @order_invitation.save
      render json: @order_invitation, status: :created, location: @order_invitation
    else
      render json: @order_invitation.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /order_invitations/1
  def update
    if @order_invitation.update(status:1)
      render json: @order_invitation
    else
      render json: @order_invitation.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /order_invitations/update
  def updateStatus
    @updated_order_invitation = OrderInvitation.where(order_id:request.headers["orderID"],user_id:request.headers["userID"])
    if @updated_order_invitation[0].update(status:1)
      render json: @updated_order_invitation[0]
    else
      render json: @updated_order_invitation[0].errors, status: :unprocessable_entity
    end
  end

  # DELETE /order_invitations/1
  def destroy
    @order_invitation.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_order_invitation
      @order_invitation = OrderInvitation.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def order_invitation_params
      params.require(:order_invitation).permit(:order_id, :user_id, :status)
    end
end
