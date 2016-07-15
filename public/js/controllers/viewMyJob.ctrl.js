/* Controllers */
var XYZCtrls = angular.module('XYZCtrls');

XYZCtrls.controller('JobsContentCtrl', ['$scope', 'getContent', '$rootScope', 'jobInformation', function (scope, getContent, $rootScope, jobInformation) {
    scope.categories = [];
    scope.subCategories = [];
    scope.subSubCategories = [];
    scope.onSelectCustom = function (item) {
        scope.subCategories = scope.parseFilter(angular.copy($rootScope.commonFilters[item]))

    };
    scope.onSelectSubCategory = function(){
        _.each($rootScope.commonFilters[jobInformation.getInfo.category()], function(item){
            if (item.subFilter == jobInformation.getInfo.sub_category()) {
                scope.isSubSub = true;
                scope.subSubCategories = scope.parseFilter(item.arr)
            }
        })
    };
    scope.parseFilter = function (filters) {
        return _.map(filters, function (filter) {
            if (filter.subFilter) {
                scope.parseFilter(filter.arr);
                return filter.subFilter
            } else {
                return filter.name
            }
        })
    };
        scope.slider = {
            minValue: 1000,
            maxValue: 50000,
            options: {
                floor: 0,
                ceil: 100000,
                step: 1,
                noSwitching: true,
                showSelectionBar: true,
                getPointerColor: function (value) {
                    return '#353B47';
                },
                getSelectionBarColor: function (value) {
                    return '#353B47';
                },
                translate: function (value) {
                    if (value < 1000) {
                        return value
                    }
                    if (value < 1000000) {
                        return value / 1000 + 'k'
                    }
                },
                onEnd: function (r) {
                    jobInformation.setInfo({budget_min: scope.slider.minValue, budget_max: scope.slider.maxValue})
                }
            }
        };
        $rootScope.$watchCollection('commonFilters', function (val) {
            if (val)
                scope.categories = Object.keys(val)
            console.log('123123123', scope.categories)
        });
    }
    ]);

XYZCtrls.controller('ViewMyJobCtrl', ['$scope', '$http', 'info', '$rootScope', '$q', 'getContent', function (scope, $http, info, rootScope, $q, getContent) {
    var user_type = info.user_type;
    var job_type = info.job_type;
    info.template = info.template || [user_type, job_type].join('-');
    info.header = info.header || job_type + ' jobs';
    info.url = info.url || ['/api', 'jobs', user_type, job_type].join('/');
    scope.info = info;
    rootScope.info = info;

}]);
