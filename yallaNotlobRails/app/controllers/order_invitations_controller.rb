class OrderInvitationsController < ApplicationController
  before_action :set_order_invitation, only: [:show, :update, :destroy]

  # GET /order_invitations
  def index
    @order_invitations = OrderInvitation.all

    render json: @order_invitations
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
    if @order_invitation.update(order_invitation_params)
      render json: @order_invitation
    else
      render json: @order_invitation.errors, status: :unprocessable_entity
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
