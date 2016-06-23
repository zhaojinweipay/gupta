/* Controllers */
var XYZCtrls = angular.module('XYZCtrls');
XYZCtrls.controller('categoryCtrl', ['$scope', '$location', '$http', '$routeParams', 'parseRating', '$q', 'getContent', function (scope, location, http, routeParams, parseRating, $q, getContent) {
    scope.ownFilter = {}
    scope.arrayProviders = getContent.service.data.data;
    scope.arrayTopics = getContent.topic.data.data;
    scope.arrayContent = getContent.content.data.data;
    scope.arrayLanguages = getContent.languages.data.data;
    scope.arrayLocations = getContent.locations.data.data;
    scope.freelancer = parseRating.rating(getContent.freelancer.data.data);
    scope.freelancer = parseRating.popularity(getContent.freelancer.data.data);
    if(routeParams)
        scope.filter = routeParams.filter;
    scope.slider = {
        experience: {
            value: 3,
            options: {
                floor: 0,
                ceil: 15,
                step: 1,
                showSelectionBar: true,
                getPointerColor: function (value) {
                    return '#B9B6B9';
                },
                getSelectionBarColor: function (value) {
                    return '#B9B6B9';
                },
                translate: function (value) {
                    if (value == 0) {
                        return value
                    }
                    if (value == 1) {
                        return value + ' year'
                    }
                    if (value == 15) {
                        return value + '+ year'
                    }
                    return value + ' years';
                }
            }
        }
    }

    scope.submitFilter = function(data){
        var filter = angular.copy(data);
        if (filter.industry_expertise)
            filter.industry_expertise= objInArr(filter.industry_expertise);
        if (filter.content_type)
            filter.content_type = objInArr(filter.content_type);
        if (filter.languages)
            filter.languages= objInArr(filter.languages);
        if (filter.location)
            filter.location= objInArr(filter.location);
        filter.experience = scope.slider.experience.value;
        console.log('send', filter);
        http.get('/freelancer', {params:filter}).then(function(resp){
            filter = {};
            scope.freelancer = parseRating.rating(resp.data.data);
            scope.freelancer = parseRating.popularity(resp.data.data);
            console.log('scope', scope.freelancer);
            console.log('resp',resp)
        }, function(err){
            console.log('err',err)
        })
    };

    function objInArr(obj){
        var arr = [];
        _.each(obj, function(value,key){
            if(value){
                arr.push(key)
            }
        });
        return arr;
    }

}]);