class AuthController < ApplicationController
  def is_signed_in?
    if user signed_in?
       render :json => {"signed in" => true, "user" => current_user}.to_json()
    else render :json => {"signed_in => false"}.to_json()
    end
  end
end
