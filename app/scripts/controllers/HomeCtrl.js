(function(){
    function HomeCtrl(Room, Message, $uibModal) {
        this.rooms = Room.all;
        //initially there will be no room shown in the container
        this.currentRoom = null;
        
        this.createRoom = function() {
            $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl as modal'
            });
        };
        
        this.setCurrentRoom = function(room) {
            this.currentRoom = room;
            this.messages = Message.getByRoomId(room.$id);
            console.log(this.messages);
        };
    }
    
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', HomeCtrl]);
})();