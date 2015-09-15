require 'json'
require 'open-uri'

data = JSON.parse(open("http://fx.priceonomics.com/v1/rates/").read)

puts data