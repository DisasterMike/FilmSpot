class SpotsController < ApplicationController
  def index
    destroy_overdue_bookings unless current_user.nil?

    if params[:query].present?
      @spots = Spot.search_by_name_address_category(params[:query])
    else
      @spots = Spot.all
    end
    @last_spots = Spot.all.last(3)
    @bookings = all_spot_bookings.select { |booking| booking.status == "pending" }
  end

  def show
    @spot = Spot.find(params[:id])
    @booking = Booking.new
    @user = current_user
    @booking.spot_id = @spot.id
    @booking.user = current_user
  end

  def new
    @spot = Spot.new
  end

  def create
    @spot = Spot.new(spots_params)
    @spot.user = current_user
    if @spot.save
      redirect_to spot_path(@spot)
    else
      render :new, status: :unprocessable_entity
    end
    # raise
  end

  private

  def destroy_overdue_bookings
    all_bookings = current_user.bookings
    all_bookings.each do |booking|
      if booking.booking_date < Date.today # + numberOfDaysRequested?
        # destroy the booking if it's already passed
        booking.destroy
      end
    end
  end

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

  def spots_params
    params.require(:spot).permit(:name, :address, :description, :category, :daily_rate, :photo)
  end
end
