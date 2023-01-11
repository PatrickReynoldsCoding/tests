const { find, promiseFind, asyncFind } = require("./fakeMongooses");

// Inside your controller
const findMyStuffAsync = async () => {
  try {
    // Await essentially sticks everything beneath it into a .then block.
    const res = await asyncFind();
    console.log(res, "!");
  } catch (e) {
    console.error(e);
  }
};

const findMyStuffPromise = () => {
  promiseFind()
    .then((res) => console.log(res, "!"))
    .catch((e) => console.error(e));
};

const findMyStuff = () => {
  find((err, value) => {
    if (err) {
      return console.error(err);
    }

    // Sending a response
    console.log(value, "!");
  });
};
