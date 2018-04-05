class OrderInvitationsController < ApplicationController
  before_action :set_order_invitation, only: [:show, :edit, :update, :destroy]

  # GET /order_invitations
  # GET /order_invitations.json
  def index
    @order_invitations = OrderInvitation.all
  end

  # GET /order_invitations/1
  # GET /order_invitations/1.json
  def show
  end

  # GET /order_invitations/new
  def new
    @order_invitation = OrderInvitation.new
  end

  # GET /order_invitations/1/edit
  def edit
  end

  # POST /order_invitations
  # POST /order_invitations.json
  def create
    @order_invitation = OrderInvitation.new(order_invitation_params)

    respond_to do |format|
      if @order_invitation.save
        format.html { redirect_to @order_invitation, notice: 'Order invitation was successfully created.' }
        format.json { render :show, status: :created, location: @order_invitation }
      else
        format.html { render :new }
        format.json { render json: @order_invitation.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /order_invitations/1
  # PATCH/PUT /order_invitations/1.json
  def update
    respond_to do |format|
      if @order_invitation.update(order_invitation_params)
        format.html { redirect_to @order_invitation, notice: 'Order invitation was successfully updated.' }
        format.json { render :show, status: :ok, location: @order_invitation }
      else
        format.html { render :edit }
        format.json { render json: @order_invitation.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /order_invitations/1
  # DELETE /order_invitations/1.json
  def destroy
    @order_invitation.destroy
    respond_to do |format|
      format.html { redirect_to order_invitations_url, notice: 'Order invitation was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_order_invitation
      @order_invitation = OrderInvitation.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def order_invitation_params
      params.require(:order_invitation).permit(:user_id, :order_id, :status)
    end
end
