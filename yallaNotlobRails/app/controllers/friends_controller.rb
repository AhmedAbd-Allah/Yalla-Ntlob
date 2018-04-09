class FriendsController < ApplicationController
  before_action :set_friend, only: [:show]



  # GET /friends/search
  def getFriendByEmail
    @user = User.find_by(name:request.headers["friendName"])
    @friend = Friend.where("user_id = ? AND friend_id = ?", request.headers["userId"], @user['id'])
    # render json: @user
    if @friend == []
      render json: {Error:"this user isn't a friend"}
    else
      render json: @friend[0]
    end  
  end
    

  # GET /friends
  def index
    @friends = Friend.where(user_id: request.headers["user-id"])
    @friend_list=[]
    @friends.each do |f|
      @user = User.find(f[:friend_id])
      @friend_list.push(@user)
    end
    render json: @friend_list
  end

  # GET /friends/1
  def show
    render json: @friend
  end

  # POST /friends
  def create
     @userFriend = User.find_by_email(params[:friend][:email])
     if @userFriend!=nil
       @friend_email = Friend.where(friend_id: @userFriend[:id])
       if @friend_email==[]
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
      else
        render json: {Error: "Friend is already exist"}
      end
    else
      render json: {Error: "Email not exist"}
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
