const bandpass = (frequencies, lower, upper) => {
  modifiedFrequencies = [];
  frequencies.map((frequency) => {
    if (frequency < lower) {
      modifiedFrequencies.push(lower);
    } else if (frequency > upper) {
      modifiedFrequencies.push(upper);
    } else {
      modifiedFrequencies.push(frequency);
    }
  });

  return modifiedFrequencies;
};

module.exports = bandpass;
