require 'json'
require 'open-uri'

data = JSON.parse(open("http://fx.priceonomics.com/v1/rates/").read)
rates = Array.new(data.values)

# crossrates 

#USD_JPY_EUR_USD = data["USD_JPY"] * data["JPY_USD"]

# def crossrates(c1,c2,c3)
#     return (c1*c2*c3)
# end

# puts crossrates(data["USD_JPY"],data["JPY_EUR"],data["EUR_USD"])
puts rates[]


#puts data["USD_JPY_EUR_USD"]