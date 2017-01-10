class Complement
  def self.of_dna(dna_strand)
    if /[GCTA]/.match(dna_string)
      dna_to_rna = { "G" => "C", "C" => "G", "T" => "A", "A" => "U" }
      dna = dna_strand.split("")
      rna = []
      index = 0

      while index < dna.length
        rna[index] = dna_to_rna[dna[index]]
        index += 1
      end
      rna.join("")
    end
    return ""
  end
end

module BookKeeping
  VERSION = 4
end
