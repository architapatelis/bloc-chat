// Use a .run() block to make sure that a username is set at the time the app is initialized.

(function(){ 
    function BlocChatCookies($cookies, $uibModal) {
        // get(key) returns the value of given cookie key (key is a string)
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === '') {
            $uibModal.open({
                templateUrl: '/templates/login.html',
                controller: 'ModalCtrl as modal',
                size: 'sm',
                // use backdrop and keyboard properties to prevent user from clicking on background to esc the modal without entering user name
                backdrop: 'static',
                keyboard: false
            });
        }
    }
    
    angular 
        .module('blocChat')
        .run(['$cookies', '$uibModal', BlocChatCookies]);
    
})();