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
filmers = User.all.select { |user| user.owner.nil? }
owners = User.all.select { |user| user.owner? }
# User.all.count > 1 ? filmers.sample.id : 1

# Create 5 spots


new_spot_1 = Spot.new(name: "Ramen Restaurant in Ueno", address: "Taito City, Tokyo 110-0005", category: "restaurant", daily_rate: (500..1000).to_a.sample.to_f, description: Faker::Lorem.paragraph, user: owners.sample)


new_spot_1.photo.attach(
io: URI.open('https://lh5.googleusercontent.com/p/AF1QipPn8A-uWHitppBHS2OfgAmn-aqeLlpaNA48jM_t=w408-h306-k-no'),
filename: 'image1.jpg',
content_type: 'image/jpg'
)

new_spot_1.save
puts new_spot_1.latitude

new_spot_2 = Spot.new(name: "Ancient Temple Osaka", address: "1 Chome-11-18 Shitennoji, Tennoji Ward, Osaka", category: "other", daily_rate: (500..1000).to_a.sample.to_f, description: Faker::Lorem.paragraph, user: owners.sample)


new_spot_2.photo.attach(
io: URI.open('https://lh3.googleusercontent.com/p/AF1QipPxc3Wg8KNffRQgsrSyEelkf48k7yERvJ53_8as=s680-w680-h510'),
filename: 'image1.jpg',
content_type: 'image/jpg'
)

new_spot_2.save
puts new_spot_2.latitude

new_spot_3 = Spot.new(name: "Urban Basketball Court", address: "Shibuya City, Tokyo 150-0041", category: "other", daily_rate: (500..1000).to_a.sample.to_f, description: Faker::Lorem.paragraph, user: owners.sample)

new_spot_3.photo.attach(
io: URI.open('https://lh5.googleusercontent.com/p/AF1QipNj7RJO95Mcy68OzFslqggtvYT0GPVKOf7bWDdw=w426-h240-k-no'),
filename: 'image1.jpg',
content_type: 'image/jpg'
)

new_spot_3.save
puts new_spot_3.latitude

new_spot_4 = Spot.new(name: "Local Clinic", address: "Shinjuku City, Tokyo 169-0073", category: "other", daily_rate: (500..1000).to_a.sample.to_f, description: Faker::Lorem.paragraph, user: owners.sample)

new_spot_4.photo.attach(
io: URI.open('https://lh5.googleusercontent.com/p/AF1QipNFGxU16YkMgkticRwo8bDEHRDuAawIFqcunoOU=w408-h272-k-no'),
filename: 'image1.jpg',
content_type: 'image/jpg'
)

new_spot_4.save
puts new_spot_4.latitude

new_spot_5 = Spot.new(name: "Business Conference Hall", address: "160-0021 Tokyo, Shinjuku City", category: "other", daily_rate: (500..1000).to_a.sample.to_f, description: Faker::Lorem.paragraph, user: owners.sample)

new_spot_5.photo.attach(
io: URI.open('https://lh5.googleusercontent.com/p/AF1QipOhGk8NOSzynrr0zCXfvjMgbSIDRvXuu91ve8Ox=w408-h276-k-no'),
filename: 'image1.jpg',
content_type: 'image/jpg'
)

new_spot_5.save
puts new_spot_5.latitude

new_spot_6 = Spot.new(name: "Modern High School", address: "Meguro City, Tokyo 153-0052", category: "other", daily_rate: (500..1000).to_a.sample.to_f, description: Faker::Lorem.paragraph, user: owners.sample)

new_spot_6.photo.attach(
io: URI.open('https://lh5.googleusercontent.com/p/AF1QipNU0ZTuFddp6RPRY7XYk-LPnKCre_CHyoQEnHhz=w408-h272-k-no'),
filename: 'image1.jpg',
content_type: 'image/jpg'
)

new_spot_6.save
puts new_spot_6.latitude

puts "Created 5 restaurant spots"

# Create 10 bookings
puts "Creating 30 bookings"
30.times do
  booking_date = Date.today + rand(7..21)
  new_booking = Booking.new(booking_date: booking_date, user_id: (filmers.any? ? filmers.sample.id : 1), status: "pending")
  new_booking.spot = Spot.all.sample
  new_booking.save
end

puts "Created 10 bookings 30 days from now"

puts "There is now #{Spot.count} spots"
puts "There is now #{Booking.count} bookings"
