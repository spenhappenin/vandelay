require 'test_helper'

class Api::ContactsReportControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_contacts_report_create_url
    assert_response :success
  end

end
