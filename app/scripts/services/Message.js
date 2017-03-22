(function(){
    function Message($firebaseArray) {
        
        var Message = {};
        
        // create a reference to Firebase database
        // then using child() method query messages object
        var ref = firebase.database().ref().child("messages");
        
        // create array of messages
        var messages = $firebaseArray(ref);
        
        //get message object with a specific roomId
        Message.getByRoomId = function(roomId) {
            return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
        };
        
        return Message;
    }
    
    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();