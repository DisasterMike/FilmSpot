class Owner::BookingsController < ApplicationController
  def index
    @bookings = Booking.all
  end

  def show
    @spot = Booking.find(params[:id])
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
