class Owner::BookingsController < ApplicationController
  def index
    all_bookings = all_spot_bookings
    # sorted_bookings_by_date = all_bookings.sort_by { |booking| booking.booking_date }
    @bookings_by_date = all_bookings.sort_by(&:booking_date)
    @bookings_by_name = all_bookings.sort_by { |booking| booking.spot.name }
    @bookings_by_viewer = all_bookings.sort_by { |booking| booking.user.name }
  end

  def show
  end

  def edit
    # raise
  end

  def update
    @booking = Booking.find(params[:id])
    if params[:status] == "accept"
      @booking.status = "accepted"
    elsif params[:status] == "decline"
      @booking.status = "declined"
    end
    @booking.save
    redirect_to owner_bookings_path
  end

  # def all_bookings
  #   bookings = all_spot_bookings
  #   render json: bookings
  # end

  private

  def all_spot_bookings
    current_bookings = []
    spots = current_user.spots
    spots.each do |spot|
      spot.bookings.each do |booking|
        current_bookings << booking
      end
    end
    current_bookings
  end
end
