class BookingsController < ApplicationController
  before_action :set_booking, only: [:show, :edit, :update]
  before_action :set_spot, only: [:new, :create]
  def index
    bookings = current_user.bookings
    @bookings_by_date = bookings.sort_by(&:booking_date)
    @bookings_by_name = bookings.sort_by { |booking| booking.spot.name }
    @bookings_by_viewer = bookings.sort_by { |booking| booking.user.name }
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

  def edit

  end

  def update
    if @booking.update(booking_params)
      redirect_to booking_path(@booking)
    else
      render :edit, status: :unprocessable_entity
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
