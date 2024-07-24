class Owner::BookingsController < ApplicationController
  def index
    all_bookings = all_spot_bookings
    if params[:query].present?
      if params[:query] == "date"
        @bookings = all_bookings.sort_by(&:booking_date)
        @filter = "Date"
      elsif params[:query] == "spot"
        @bookings = all_bookings.sort_by { |booking| booking.spot.name }
        @filter = "Spot"
      elsif params[:query] == "viewer"
        @bookings = all_bookings.sort_by { |booking| booking.user.name }
        @filter = "Viewer"
      end
    else
      @bookings = all_bookings.sort_by(&:booking_date)
      @filter = "Date"
    end
  end

  def show
    @spot = Booking.find(params[:id])
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
