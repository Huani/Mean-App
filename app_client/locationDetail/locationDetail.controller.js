(function() {

    angular
        .module('loc8rApp')
        .controller('locationDetailCtrl', locationDetailCtrl);

    locationDetailCtrl.$inject = ['$routeParams', '$uibModal', 'loc8rData']; //geen model maar uibModal met de nieuweren GUI Ang.

    function locationDetailCtrl($routeParams, $uibModal, loc8rData) {
        var vm = this;
        vm.locationid = $routeParams.locationid;

        loc8rData.locationById(vm.locationid)
            .success(function(data) {
                vm.data = {
                    location: data
                };
                vm.pageHeader = {
                    title: vm.data.location.name
                };
            })
            .error(function(e) {
                console.log(e);
            });

        vm.popupReviewForm = function() {
            var uibModalInstance = $uibModal.open({
                templateUrl: '/reviewModal/reviewModal.view.html',
                controller: 'reviewModalCtrl as vm',
                resolve: { //data naar popUpScherm loodsen
                    locationData: function() {
                        return {
                            locationid: vm.locationid,
                            locationName: vm.data.location.name
                        };
                    }
                }
            });

            uibModalInstance.result.then(function(data) { // when uibModal is resoved push returned data into array of reviews.
                vm.data.location.reviews.push(data);
            });
        };

    }

})();
