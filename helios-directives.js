(function(window, angular, undefined) {'use strict';
    angular.module('heliosDirectives', ['ng'])
        .directive('centerVideo', function() {
            return {
                link: function($scope, $elem, attrs) {

                    var ratio = $scope.$eval(attrs.centerVideo) || [16,9];

                    $elem[0].style.position = 'absolute';
                    $elem[0].style.top = 50 + '%';
                    $elem[0].style.left = 50 + '%';

                    var setMargins = function(w, h) {
                        $elem[0].style.marginLeft = -w/2 + 'px';
                        $elem[0].style.marginTop = -h/2 + 'px';
                    }

                    window.onresize = function() {
                        if (resizeTimeout) {clearTimeout(resizeTimeout);}
                        resizeTimeout = setTimeout(function(){
                            var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
                            var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;

                            var styleOrder = (windowWidth/windowHeight) < (ratio[0]/ratio[1]) ? ['height', 'width'] : ['width', 'height'];

                            $elem[0].style[styleOrder[0]] = 100 + '%';
                            $elem[0].style[styleOrder[1]] = 'auto';

                            setMargins($elem[0].offsetWidth, $elem[0].offsetHeight);
                        }, 500);
                    }
                }
            }
        });
        
})(window, window.angular);

