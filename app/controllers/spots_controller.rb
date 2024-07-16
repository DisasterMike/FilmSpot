class SpotsController < ApplicationController
  def index
  end

  def show
  end

  def new
    @spot = Spot.new
  end

  def create
    @spot = Spot.new(spots_params)
    @user = User.find(params[:id])
    @spot.users_id = @user
    @spot.save
    raise
  end

  private

  def spots_params
    params.require(:spot).permit(:name, :address, :description, :category, :daily_rate)
  end
end
