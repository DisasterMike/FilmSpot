class BookingsController < ApplicationController
  before_action :set_booking, only: [:show, :edit, :update]
  before_action :set_spot, only: [:new, :create]
  def index
    bookings = current_user.bookings
    if params[:query].present?
      if params[:query] == "date"
        @bookings = bookings.sort_by(&:booking_date)
        @filter = "Date"
      elsif params[:query] == "spot"
        @bookings = bookings.sort_by { |booking| booking.spot.name }
        @filter = "Spot"
      elsif params[:query] == "viewer"
        @bookings = bookings.sort_by { |booking| booking.user.name }
        @filter = "Viewer"
      end
    else
      @bookings = bookings.sort_by(&:booking_date)
      @filter = "Date"
    end
  end

  def show
    @user = current_user
  end

  def new
    @booking = Booking.new
  end

  def create
    @booking = Booking.new(booking_params)
    @booking.spot = @spot
    @booking.user = current_user
    @booking.status = "pending"
    raise
    if @booking.save
      redirect_to booking_path(@booking)
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit
  end

  def update
    if params[:status] == "canceled"
      @booking.status = "canceled"
      @booking.save
      redirect_to booking_path(@booking)
    else
      if @booking.update(booking_params)
        redirect_to booking_path(@booking)
      else
        render :edit, status: :unprocessable_entity
      end
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
    params.require(:booking).permit(:booking_date, :end_date)
  end
end
