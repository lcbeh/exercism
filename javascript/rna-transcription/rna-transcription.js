function DnaTranscriber () {}

DnaTranscriber.prototype.toRna = function (string) {
  transcribe = { 'G': 'C', 'C': 'G', 'T': 'A', 'A': 'U'};

    var dna = string.split('');
    for (var i = 0; i < dna.length; i++) dna[i] = transcribe[dna[i]];
    return dna.join('');
};

module.exports = DnaTranscriber;
