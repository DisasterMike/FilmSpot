class BookingsController < ApplicationController
  def index
    bookings = current_user.bookings
    @bookings_by_date = bookings.sort_by(&:booking_date)
    @bookings_by_name = bookings.sort_by { |booking| booking.spot.name }
    @bookings_by_viewer = bookings.sort_by { |booking| booking.user.name }
  end

  def show
  end

  def new
  end

  def create
  end
end
