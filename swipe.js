const cron = require("node-cron");
const { updateSwipeInDatabse, fetchUsers } = require("./auth");

const updateSwipe = async () => {
  const results = await fetchUsers();

  const individualUser = results.filter(
    (data) => data.userType == "Individual"
  );

  individualUser.map((data) =>
    updateSwipeInDatabse(data.uid || data.email, {
      ...data,
      no_of_swipe: 0,
    })
  );
};

const thread = cron.schedule("30 0 * * *", updateSwipe);

module.exports = thread;
