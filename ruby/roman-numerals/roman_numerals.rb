class Fixnum

  def to_roman
    roman = ''

    hundreds = (self % 1000 / 100)
    tens = (self % 100 / 10)
    ones = (self % 10)

    roman += 'M' * (self / 1000)

    if hundreds == 9
      roman += 'CM'
    elsif hundreds == 4
      roman += 'CD'
    else
      roman += 'D' * (self % 1000 / 500)
      roman += 'C' * (self % 500 / 100)
    end

    if tens == 9
      roman += 'XC'
    elsif tens == 4
      roman += 'XL'
    else
      roman += 'L' * (self % 100 / 50)
      roman += 'X' * (self % 50 / 10)
    end

    if ones == 9
      roman += 'IX'
    elsif ones == 4
      roman += 'IV'
    else
      roman += 'V' * (self % 10 / 5)
      roman += 'I' * (self % 5 / 1)
    end

    roman
  end

end

module BookKeeping
  VERSION = 2
end
