// Inside Mongoose
const find = (callback) => {
  const isSuccess = Math.random() < 0.75;

  if (isSuccess) {
    callback(null, "Great");
  } else {
    callback("Something fucked up");
  }
};

const promiseFind = () => {
  return Promise.new((resolve, reject) => {
    const isSuccess = Math.random() < 0.75;
    if (isSuccess) {
      resolve("Great");
    } else {
      reject("Something fucked up");
    }
  });
};

const asyncFind = async () => {
  const isSuccess = Math.random() < 0.75;
  if (isSuccess) return "Great";
  throw "Something fucked up";
};

module.exports = { find, promiseFind, asyncFind };
