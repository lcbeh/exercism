class Pangram

  def self.pangram?(sentence)
    phrase = sentence.downcase
    ("a".."z").all? { |alphabet| phrase.include?(alphabet)}
  end

end

module BookKeeping
  VERSION = 3
end
