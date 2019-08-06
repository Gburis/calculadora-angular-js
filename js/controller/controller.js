angular.module('calc').controller('buttons', function($scope){
    $scope.buttons = ['7','8', '9', '4', '5', '6', '1', '2' ,'3', '0'];
    $scope.operations = ['+', 'x', '-', '/'];
    $scope.value = '';
    $scope.mensagem = '';

    $scope.write = function(number){
        for(let i=0; i < 4; i++){
            if($scope.value == $scope.operations[i]){
                $scope.mensagem = "Adicione o valor a ser somado antes da operação";
                $scope.value = '';
                return false;
            }
        }
        $scope.value += number;
        $scope.mensagem = '';
    }

    $scope.send = function(){
        let x = $scope.value.split('x');
        if(x.length > 1){
            $scope.value = eval(x[0] * x[1]);
            return false;
        }
        $scope.value = eval($scope.value);
    }

    $scope.delete = function(){
        $scope.value = '';
        $scope.mensagem = '';
    }

    $scope.clear = function(){
        let array = $scope.value.split('');
        array.pop();

        for(let i = 0; i < array.length; i++){
            if(i < 1){
                $scope.value = '';
            }else{
                $scope.value += array[i];   
            }
        }

    } 
});