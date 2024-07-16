class Owner::SpotsController < ApplicationController
  def index
    @user = current_user
    @spots = @user.spots
  end

  def show
  end
end
