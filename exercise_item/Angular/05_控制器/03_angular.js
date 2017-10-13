var app = angular.module('myApp',[]);
app.controller('myCtrl', function ($scope) {
    //json 格式
    $scope.items = [
        {name: 'lucy',country:'北京'},
        {name: 'hanmeimei',country:'上海'},
        {name: 'lilei', country: '广州'}
    ];

    //对象格式
    //$scope.items = {
    //    "name":'lucy',
    //    "age":'18',
    //    "sex":'female'
    //}
});
