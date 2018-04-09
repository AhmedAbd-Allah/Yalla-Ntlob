class GroupMembersController < ApplicationController
  before_action :set_group_member, only: [:show, :update, :destroy]

  # GET /group_members
  def index
    @group_members = GroupMember.all

    render json: @group_members
  end

  # GET /group_members/1 ==> [group_id]
  def show
    @group_members = GroupMember.where(group_id:params[:id])
    @users_in_group=[]
    @group_members.each do |f|
      @user = User.find(f[:user_id])
      @users_in_group.push(@user)
    end
    render json: @users_in_group
  end

  # POST /group_members
  def create
    @user=User.find_by(name:params[:name])
    @group_member = GroupMember.new(user_id: @user['id'] ,group_id:params[:group_id])

    if @group_member.save
      render json: @group_member, status: :created, location: @group_member
    else
      render json: @group_member.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /group_members/1
  def update
    if @group_member.update(group_member_params)
      render json: @group_member
    else
      render json: @group_member.errors, status: :unprocessable_entity
    end
  end

  # DELETE /group_members/1
  def destroy
    @group_member.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_group_member
      @group_member = GroupMember.find_by(group_id:params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def group_member_params
      params.require(:group_member).permit(:name, :group_id)
    end
end
