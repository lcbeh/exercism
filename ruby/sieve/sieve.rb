class Sieve

  def initialize (n)
    @number = n
    @numbers = (2..n).to_a
  end

  def primes
    return [] if @number < 2

    while @number > 2
      if is_not_prime?(@number)
        @numbers.delete(@number)
      end
      @number -= 1
    end
    @numbers
  end

  private

  def is_not_prime? (number)
    @numbers.any? do |factor|
      number % factor == 0 && number > factor
    end
  end

end

module BookKeeping
  VERSION = 1 # Where the version number matches the one in the test.
end
