(function(){
    function Message($firebaseArray) {
        var Message = {};
        
        // create a reference to Firebase database
        // using child() method query messages object
        var ref = firebase.database().ref().child("messages");
        // create array of messages
        var messages = $firebaseArray(ref);
        
        Message.getByRoomId = function(roomId) {
            return ref.orderByChild('roomId').equalTo(roomId);
        };
        
        return Message;
    }
    
    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();