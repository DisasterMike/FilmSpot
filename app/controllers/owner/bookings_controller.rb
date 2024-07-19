class Owner::BookingsController < ApplicationController
  def index
    # all_bookings = Booking.all
    all_bookings = current_user.bookings
    sorted_bookings_by_date = all_bookings.sort_by { |booking| booking.booking_date }
    # render json: sorted_bookings_by_date
    @bookings = sorted_bookings_by_date
    @bookings_by_name = all_bookings.sort_by { |booking| booking.spot.name }
    p @bookings_by_name
  end

  def show
  end

  def edit
    # raise
  end

  def update
    # raise
    @booking = Booking.find(params[:id])
    # puts params[:status]
    if params[:status] == "accept"
      @booking.status = "accepted"
    elsif params[:status] == "decline"
      @booking.status = "declined"
    end
    @booking.save
    redirect_to owner_bookings_path
  end

  def all_bookings
    bookings = current_user.bookings
    render json: bookings
  end
end
