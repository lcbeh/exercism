class Hamming

  def self.compute (strand1, strand2)
    dna1 = strand1.split('')
    dna2 = strand2.split('')
    index = 0
    difference = 0

    if dna1.length != dna2.length
      raise (ArgumentError)
    end

    while index < dna1.length
      difference += 1 if dna1[index] != dna2[index]
      index += 1
    end

    difference
  end

end
