module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :current_user

    def connect
      p "***********************************"
      self.current_user = find_verified_user
    end

    private
      def find_verified_user
        id = request.params[:id]
        p id
        # user = JsonWebToken.decode(token)
        p "////////////////////////"
        # p user
        if verified_user = User.find_by_id(id)
          verified_user
        else
          reject_unauthorized_connection
        end
      end
  end
end
