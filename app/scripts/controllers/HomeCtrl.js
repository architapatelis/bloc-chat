(function(){
    function HomeCtrl(Room, Message, $uibModal, $cookies) {
        
        
        this.rooms = Room.all;
        
        
        //initially there will be no room shown in the container
        this.currentRoom = null;
        
        
        // remember we set blocChatCurrentUser = username using the  createUserName() in Modal.Ctrl
        this.currentUser = $cookies.get('blocChatCurrentUser');
        
        
        this.createRoom = function() {
            $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl as modal',
                size: 'sm'
            });
        };
        
        
        // invoked by click on Create new room button
        this.setCurrentRoom = function(room) {
            this.currentRoom = room;
            this.messages = Message.getByRoomId(this.currentRoom.$id);
        };
        
        
        // invoked by click on 'send' button 
        this.sendMessage = function () {
            this.newMessage.roomId = this.currentRoom.$id;
            this.newMessage.username = this.currentUser;
            this.newMessage.sentAt = firebase.database.ServerValue.TIMESTAMP;
            Message.send(this.newMessage);
            this.newMessage.content = '';
        };
        
    }
    
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', '$cookies', HomeCtrl]);
})();