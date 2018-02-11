/*
App.room = App.cable.subscriptions.create({
  channel: "RoomChannel",
  user_id: 10
}, {
  connected: function() {},
  disconnected: function() {},
  received: function(data) {
    console.log(data);
    alert(data['message'])
  },
  speak: function(message) {
    console.log(message);
    return this.perform('speak', {
      message: message,
      user_id: 10,
      room_id: 11
    });
  }
});
*/
