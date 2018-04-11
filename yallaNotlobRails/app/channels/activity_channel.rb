class ActivityChannel < ApplicationCable::Channel
  def subscribed
    stream_from "activity_#{current_user.id}"
    p {current_user.id}
  end


  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
