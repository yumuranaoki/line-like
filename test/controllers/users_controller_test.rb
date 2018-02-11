require 'test_helper'

class UsersControllerTest < ActionController::TestCase
  include Devise::TestHelpers
  def setup
    @user = users(:john)
    sign_in(@user)
  end

  test 'should get show' do
    
  end


end
