class BookingsController < ApplicationController
  before_action :set_booking, only: [:show]
  before_action :set_spot, only: [:new, :create]
  def index
  end

  def show
  end

  def new
    @booking = Booking.new
  end

  def create
    @booking = Booking.new(booking_params)
    @booking.spot = @spot
    @booking.user = current_user
    @booking.status = "pending"

    if @booking.save
      redirect_to booking_path(@booking)
    else
      render :new, status: :unprocessable_entity
    end
  end

  private
  def set_booking
    @booking = Booking.find(params[:id])
  end

  def set_spot
    @spot = Spot.find(params[:spot_id])
  end

  def booking_params
    params.require(:booking).permit(:booking_date)
  end
end
