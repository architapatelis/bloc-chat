// remember Room.js is a service. we don't use 'this' to refer to 'Room' like we would in a controller. 
(function() {
    function Room($firebaseArray) {
        
        var Room = {};
        
        // create a reference to Firebase database
        // using child() method query messages object
        var ref = firebase.database().ref().child("rooms");
        //get array of rooms stored in database on firebase
        
        var rooms = $firebaseArray(ref);
        
        // makes 'rooms' array public. used in home.html
        Room.all = rooms;
        
        // to add newly created 'room' to the 'rooms' array.
        //call in modalCtrl.js
        Room.add = function (room) {
            rooms.$add(room);
        };
        
        return Room;
    }
    
    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();