class Raindrops

  def self.convert(number)
    sound = ''

    sound += 'Pling' if number % 3 == 0
    sound += 'Plang' if number % 5 == 0
    sound += 'Plong' if number % 7 == 0

    sound == '' ? ans = number.to_s : ans = sound
    p ans
  end
end

module BookKeeping
  VERSION = 3
end
