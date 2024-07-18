class Owner::BookingsController < ApplicationController
  def index
    all_bookings = Booking.all
    sorted_bookings_by_date = all_bookings.sort_by {|booking| booking.booking_date }
    # p sorted_bookings
    @bookings = sorted_bookings_by_date
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
end
