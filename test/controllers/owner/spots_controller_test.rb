require "test_helper"

class Owner::SpotsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get owner_spots_index_url
    assert_response :success
  end

  test "should get show" do
    get owner_spots_show_url
    assert_response :success
  end
end
