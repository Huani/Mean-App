(function() {
    angular
        .module('loc8rApp')
        .controller('reviewModalCtrl', reviewModalCtrl);
    reviewModalCtrl.$inject = ['$uibModalInstance', 'loc8rData', 'locationData'];

    function reviewModalCtrl($uibModalInstance, loc8rData, locationData) {
        var vm = this;
        vm.locationData = locationData; // save parameter into view model

        vm.onSubmit = function() {
            vm.formError = "";
            if (!vm.formData || !vm.formData.name || !vm.formData.rating || !vm.formData.reviewText) {
                vm.formError = "All fields required, please try again";
                return false;
            } else {
                vm.doAddReview(vm.locationData.locationid, vm.formData);

            }
        };

        vm.doAddReview = function(locationid, formData) {

            loc8rData.addReviewById(locationid, {
                    author: formData.name,
                    rating: formData.rating,
                    reviewText: formData.reviewText


                })
                .success(function(data) {
                    vm.uibModal.close(data); //
                })
                .error(function(data) {
                    console.log("location id is" + locationid + data.rating);
                    vm.formError = "Your review has not been saved, try again";
                });
            return false;
        };

        vm.uibModal = {
            close: function(result) {
                $uibModalInstance.close(result);
            },
            cancel: function() {
                $uibModalInstance.dismiss('cancel');
            }

        };



    }
})();
