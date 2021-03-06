(function(){
    function Message($firebaseArray) {
        
        var Message = {};
        
        // create a reference to Firebase database
        // then using child() method query messages object
        var ref = firebase.database().ref().child("messages").orderByChild('roomId');
        
        // create array of messages
        var messages = $firebaseArray(ref);
        
        //get message object with a specific roomId
        Message.getByRoomId = function(roomId) {
            return $firebaseArray(ref.equalTo(roomId));
        };
        
        
        // add newly created message to firebase and also timestamp that message.
        Message.send = function(newMessage) {
            messages.$add(newMessage);
        };
        
        return Message;
    }
    
    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();