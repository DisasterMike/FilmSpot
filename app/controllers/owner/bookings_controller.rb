class Owner::BookingsController < ApplicationController
  def index
    @bookings = Booking.all
  end

  def show
    @spot = Booking.find(params[:id])
  end
end
