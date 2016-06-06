angular.module('Lozone')
.controller('ProfileCtrl', function($state, auth, profile, md5, Users, $scope){
  var profileCtrl = this;
  $scope.profile = profile;
  $scope.getGravatar = Users.getGravatar;
  $scope.navHeader = profile.displayName +"'s Closet";
  profileCtrl.updateProfile = function(){
    $scope.profile.emailHash = md5.createHash(auth.password.email);
    $scope.profile.$save();
    $state.go('closets');
  }
})
