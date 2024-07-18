class SpotsController < ApplicationController
  def index
  end

  def show
    @spot = Spot.find(params[:id])
  end

  def new
    @spot = Spot.new
  end

  def create
    @spot = Spot.new(spots_params)
    @spot.user = current_user
    if @spot.save
      redirect_to spot_path(@spot)
    else
      render :new, state: :unprocessable_entity
    end
  end

  private

  def spots_params
    params.require(:spot).permit(:name, :address, :description, :category, :daily_rate)
  end
end
