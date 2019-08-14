const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);


/**
  * Creates a full choirID_choirApproved attribute based on the choirID and choirApproved
  */
exports.choirID_choirApproved = functions.database.ref('/user/{userId}').onWrite((change) => {
  if (!change.after.exists()) return null; // Exit when the data is deleted.

  // The current value of what was written to the Realtime Database.
  const original = change.after.val();

  const choirID_choirApproved = `${original.choirID} ${original.choirApproved}`;
  return change.after.ref.child('choirID_choirApproved').set(choirID_choirApproved);
});

/**
  * Listens for user deletion and
  * - deletes the user's reference in the database
  */
 exports.deleteUserData = functions.auth.user()
 .onDelete(user => admin.database().ref(`/user/${user.uid}`).remove());