(function(){
    function ModalCtrl(Room, $uibModalInstance) {
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
    }
    
 
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);

})();