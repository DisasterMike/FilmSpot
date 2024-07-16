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
    if @spot.save
      redirect_to owner_spots_show_path(@spot)
    else
      render :new
    end
  end

  private

  def spots_params
    params.require(:spot).permit(:name, :address, :description, :category, :daily_rate)
  end
end
