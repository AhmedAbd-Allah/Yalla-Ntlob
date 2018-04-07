require 'test_helper'

class OrderInvitationsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @order_invitation = order_invitations(:one)
  end

  test "should get index" do
    get order_invitations_url, as: :json
    assert_response :success
  end

  test "should create order_invitation" do
    assert_difference('OrderInvitation.count') do
      post order_invitations_url, params: { order_invitation: { order_id: @order_invitation.order_id, status: @order_invitation.status, user_id: @order_invitation.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show order_invitation" do
    get order_invitation_url(@order_invitation), as: :json
    assert_response :success
  end

  test "should update order_invitation" do
    patch order_invitation_url(@order_invitation), params: { order_invitation: { order_id: @order_invitation.order_id, status: @order_invitation.status, user_id: @order_invitation.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy order_invitation" do
    assert_difference('OrderInvitation.count', -1) do
      delete order_invitation_url(@order_invitation), as: :json
    end

    assert_response 204
  end
end
