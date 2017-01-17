class Squares

  def initialize (number)
    @numbers = (0..number).to_a
  end

  def square_of_sum
    sum = @numbers.reduce(:+)
    sum ** 2
  end

  def sum_of_squares
    @numbers.inject(0) do |sum, number|
      sum + (number ** 2)
    end
  end

  def difference
    square_of_sum - sum_of_squares
  end

end

module BookKeeping
  VERSION = 3
end
