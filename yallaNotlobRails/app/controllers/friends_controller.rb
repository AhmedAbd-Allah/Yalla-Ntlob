class FriendsController < ApplicationController
  before_action :set_friend, only: [:show]

  # GET /friends
  def index
    @friends = Friend.where(user_id: request.headers["user-id"])

    render json: @friends
  end

  # GET /friends/1
  def show
    render json: @friend
  end

  # POST /friends
  def create
     @userFriend = User.find_by_email(params[:friend][:email])
     @body = {user_id:friend_params[:user_id], friend_id:@userFriend[:id]}
     @friend = Friend.new(@body)
    if @friend.save
      render json: {friend_id: @userFriend[:id] ,
                    name: @userFriend[:name],
                    email: @userFriend[:email],
                    status: :created}
    else
      render json: @friend.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /friends/1
  def update
    if @friend.update(friend_params)
      render json: @friend
    else
      render json: @friend.errors, status: :unprocessable_entity
    end
  end

  # DELETE /friends/1
  def destroy
    # @group_member = GroupMember.where(user_id: params[:id])
    # if @group_member!=nil
    #   @group_member.destroy_all
    # end
    # @user = User.find(friend_params[:user_id])
    @friend = Friend.where(:friend_id => params[:id] ,
              :user_id => request.headers["user-id"])
    @friend.destroy_all
    render json: { friend: @friend, status: 200, msg: 'friend have been deleted.' }
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_friend
      @friend = Friend.where(friend_id: params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def friend_params
      params.require(:friend).permit(:user_id)
    end
end
