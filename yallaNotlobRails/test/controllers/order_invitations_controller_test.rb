require 'test_helper'

class OrderInvitationsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @order_invitation = order_invitations(:one)
  end

  test "should get index" do
    get order_invitations_url
    assert_response :success
  end

  test "should get new" do
    get new_order_invitation_url
    assert_response :success
  end

  test "should create order_invitation" do
    assert_difference('OrderInvitation.count') do
      post order_invitations_url, params: { order_invitation: { order_id: @order_invitation.order_id, status: @order_invitation.status, user_id: @order_invitation.user_id } }
    end

    assert_redirected_to order_invitation_url(OrderInvitation.last)
  end

  test "should show order_invitation" do
    get order_invitation_url(@order_invitation)
    assert_response :success
  end

  test "should get edit" do
    get edit_order_invitation_url(@order_invitation)
    assert_response :success
  end

  test "should update order_invitation" do
    patch order_invitation_url(@order_invitation), params: { order_invitation: { order_id: @order_invitation.order_id, status: @order_invitation.status, user_id: @order_invitation.user_id } }
    assert_redirected_to order_invitation_url(@order_invitation)
  end

  test "should destroy order_invitation" do
    assert_difference('OrderInvitation.count', -1) do
      delete order_invitation_url(@order_invitation)
    end

    assert_redirected_to order_invitations_url
  end
end
