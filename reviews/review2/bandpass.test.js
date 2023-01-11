const bandpass = require("./bandpass");

describe("bandpass function", () => {
  it("returns the array given to it", () => {
    expect(bandpass([40, 50, 60, 70], 40, 1000)).toEqual([40, 50, 60, 70]);
  });
  it("returns the array given to it", () => {
    expect(bandpass([10, 20, 30, 40], 40, 1000)).toEqual([40, 40, 40, 40]);
  });
  it("returns the array given to it", () => {
    expect(bandpass([2000, 3000, 4000], 40, 1000)).toEqual([1000, 1000, 1000]);
  });
  it("returns the array given to it", () => {
    expect(bandpass([60, 10, 45, 60, 1500], 40, 1000)).toEqual([
      60, 40, 45, 60, 1000,
    ]);
  });
});
