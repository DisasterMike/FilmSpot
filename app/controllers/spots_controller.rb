class SpotsController < ApplicationController
  def index
    @spots = Spot.all
  end

  def show
    @spot = Spot.find(params[:id])
    @booking = Booking.new
    @user = current_user
    @booking.spot_id = @spot.id
    @booking.user = current_user
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
      render :new, status: :unprocessable_entity
    end
    # raise
  end

  private

  def spots_params
    params.require(:spot).permit(:name, :address, :description, :category, :daily_rate, :photo)
  end
end
