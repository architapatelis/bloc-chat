(function(){
    function ModalCtrl(Room, $uibModalInstance, $cookies) {
        // if user clicks 'Cancel'
        this.cancel = function() {
            $uibModalInstance.dismiss();
        };
        
        // if user clicks 'Create room'
        this.createRoom = function() {
            //call the 'add' function from Room.js 
            // this.newRoom comes from ng-model in modal.html
            Room.add(this.newRoom);
            $uibModalInstance.close();
        };
        
        
        this.createUserName = function() {
            // put(key, value) - sets a value for given cookie key/Id
            // key - a string, id for the value
            // value - a string, raw value to be stored
            $cookies.put('blocChatCurrentUser', this.username);
            $uibModalInstance.close();
        };
    }
    
 
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', '$cookies', ModalCtrl]);

})();