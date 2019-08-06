angular.module('myDirectives',[])
    .directive('viewCalc', function(){
        return{
            restrict: 'E',
            scope:{
                n : '@'
            },
            template: 
                 '<form>'
                +   '<div class="form-group display">'
                +   '<input type="text" value="{{n}}" class="form-control" readonly>'
                +   '</div>'
                +'</form>'
        }
    }).directive('buttonNumber', function(){
        return{
            restrict: 'E',
            scope: {
                number: '@',
                action: '&'
            },
            template: '<button type="button" class="btn btn-secondary number" ng-click="action()" >{{number}}</button>'
        }
    }).directive('operation', function(){
        return{
            restrict: 'E',
            scope: {
                operation: '@',
                action: '&'
            },
            template: '<button type="button" class="btn btn-warning operation" ng-click="action()" >{{operation}}</button>'
        }
    }).directive('clear', function(){
        return{
            restrict: 'E',
            scope:{
                clear: '&',
                delete: '&'
            },
            template: 
                '<button type="button" class="btn btn-info number" ng-click="delete()" > C </button>'
                +'<button type="button" class="btn btn-info del" ng-click="clear()" >'
                +   '<i class="material-icons">more</i>' 
                +'</button>'
        }
    }).directive('send', function(){
        return{
            restrict: 'E',
            scope:{
                send: '&'
            },
            template:
                '<button type="button" class="btn btn-info send" ng-click="send()"> = </button>'
                 
        }
    });