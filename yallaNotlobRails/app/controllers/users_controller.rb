class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]
  before_action :authenticate_user,  only: [:index, :current, :update, :auth]
  before_action :authorize_as_admin, only: [:destroy]
  before_action :authorize,          only: [:update]
  # GET /users
  def index
    render json: {status: 200, msg: 'Logged-in'}
  end

  # GET /users/search
  def getUserByEmail
    @resulted_user = User.find_by(email:request.headers["email"])
    render json: @resulted_user
    end
    
  # GET /users/1
  def show
    render json: @user
  end


  # POST /users
  def create
    @user_email = User.where(email: user_params[:email])
    if @user_email == []
      @user = User.new(user_params)
      if @user.save
        render json: { user: @user ,status: 200, msg: 'User have been created.' }
      else
        render json: @user.errors, status: :unprocessable_entity
      end
    else
      render json: {Error: "Email is alredy exist"}
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: { user: @user ,status: 200, msg: 'User details have been updated.' }
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
    render json: { status: 200, msg: 'User has been deleted.' }
  end

  # Call this method to check if the user is logged-in.
  # If the user is logged-in we will return the user's information.
  def current
    # current_user.update!(last_login: Time.now)
    render json: current_user
  end

  def auth
  @user = User.find(current_user.id)
  render json: { status: 200, msg: @user}
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_params
      params.require(:user).permit(:name, :email, :password, :image)
    end

     # Adding a method to check if current_user can update itself.
     # This uses our UserModel method.
     def authorize
       return_unauthorized unless current_user
     end
end
