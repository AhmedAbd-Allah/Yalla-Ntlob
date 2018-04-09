class GroupMembersController < ApplicationController
  before_action :set_group_member, only: [:show, :update, :destroy]

  # GET /group_members
  def index
    @group_members = GroupMember.all

    render json: @group_members
  end

  # GET /group_members/1
  def show
    render json: @group_member
  end

  # POST /group_members
  def create
    @user=User.find_by(name:params[:name])
    @friend_exist = Friend.where(friend_id: @user['id'] , user_id: params[:user_id])
    if @friend_exist != []
      @group_member_exist = GroupMember.where(user_id: @user['id'], group_id:params[:group_id])
      if @group_member_exist == []
          @group_member = GroupMember.new(user_id: @user['id'] ,group_id:params[:group_id])
          if @group_member.save
            render json: @user, status: :created, location: @group_member
          else
            render json: @group_member.errors, status: :unprocessable_entity
          end
      else
        render json: {Error: "Friend is already exist in this group"}
       end
    else
      render json: {Error: "This name is not exist in your friends"}
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
      @group_member = GroupMember.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def group_member_params
      params.require(:group_member).permit(:name, :group_id)
    end
end
