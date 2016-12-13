(function() {



    angular
        .module('loc8rApp')
        .directive('ratingStars', ratingStars);

    function ratingStars() {
        return {
            restrict: 'EA',
            scope: {
                thisRating: '=rating' //only use the ratingStars directive when the string rating-stars is found in particular places.
            },
            templateUrl: '/common/directives/ratingStars/ratingStars.template.html'
        };
    }
})();
