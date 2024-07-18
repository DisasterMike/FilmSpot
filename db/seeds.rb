# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

Booking.destroy_all
Spot.destroy_all


# Create 5 spots
puts "Creating 5 restaurant spots"
5.times do
new_spot = Spot.new(name: Faker::Restaurant.name, address: Faker::Address.city, category: "restaurant", daily_rate: (500..1000).to_a.sample.to_f, description: Faker::Lorem.paragraph, user_id: 1)
new_spot.save
end
puts "Created 5 restaurant spots"

# Create 10 bookings
puts "Creating 10 bookings 30 days from now"
10.times do
booking_date = Date.today + rand(7..21)
new_booking = Booking.new(booking_date: booking_date, user_id: 1, status: "pending")
new_booking.spot = Spot.all.sample
new_booking.save
end

puts "Created 10 bookings 30 days from now"

puts "There is now #{Spot.count} spots"
puts "There is now #{Booking.count} bookings"
