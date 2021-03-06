XYZCtrls.directive('buyer', function () {
    return {
        restrict: 'E',
        scope: {
            item: '=',
            buyer: '@'
        },
        template: '<a href="#/profile/user/{{buyer._id}}">{{buyer.first_name}}&nbsp;{{buyer.last_name}}</a>',
        controller: ['$scope', function (scope) {
            scope.buyer = scope.item.buyer || scope.item
            //console.log("buyer directive", scope.buyer)
        }]
    };
});