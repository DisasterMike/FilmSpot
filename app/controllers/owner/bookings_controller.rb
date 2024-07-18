class Owner::BookingsController < ApplicationController
  def index
    @bookings = Booking.all
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
    else params[:status] == "decline"
      @booking.status = "declined"
    end
    @booking.save
    redirect_to owner_bookings_path
  end
end
