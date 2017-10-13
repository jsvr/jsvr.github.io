<<<<<<< HEAD


var app = angular.module('myApp',[]);
app.controller('myCtrl', function ($scope,$http) {
    //校验初始值
    $scope.checkData = {
        'nameCheck': 'initial',
        'passwordCheck': 'initial',
        'confirmPasswordCheck': 'initial',
        'emailCheck': 'initial',

    };
    $scope.tipMessageData = {
        'show' : false,
        'unText': '',
        'pwText': '',
    };
    $scope.data = {
        userName: undefined
    };
    //校验用户名
    $scope.provingUserName = function () {
        var name = $scope.data.userName,
            unRight = '密码格式正确',//////////////////////////////////////
            unWrong = '密码为6-20的字母和数字组合',
            nameReg =/^[a-zA-Z]{5,10}$/i;
        console.log(name);
        //当name没有值为 undefined时,正则匹配为什么会成功;
        if(nameReg.test(name) && typeof name !== "undefined"){
            $scope.checkData.nameCheck = 'm';
            return true;
        }else if(!nameReg.test(name) || typeof name === "undefined"){
            $scope.checkData.nameCheck = 'f';
            return false;
        }
    }

    //校验密码
    $scope.provingPassword = function () {
        var password = $scope.password,
            pwRight = '密码格式正确',
            pwWrong = '密码为6-20的字母和数字组合',
            passwordReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
        if(passwordReg.test(password)){
            $scope.checkData.passwordCheck = true;
            $scope.tipMessageData.show = true;
            $scope.tipMessageData.pwText = pwRight;
            return true;
        }else if(!passwordReg.test(password) ||  password == undefined){
            $scope.checkData.passwordCheck = 'f';
            $scope.tipMessageData.show = true;
            $scope.tipMessageData.pwText = pwWrong;
            return false;
        }
    }

    //确认密码
    $scope.provingConFirmPassword = function () {
        var conFirmPassword = $scope.conFirmPassword,
            password = $scope.password;
        if(conFirmPassword == password){
            $scope.checkData.confirmPasswordCheck = 'm';
            return true;
        }else{
            $scope.checkData.confirmPasswordCheck = 'f';
            return false;
        }
    }

    //校验邮箱
    $scope.provingEmail = function () {
        var email = $scope.email,
            emailReg = /^[0-9a-z][_\.0-9a-z\-]{0,41}@([0-9a-z][0-9a-z\-]{0,30}[0-9a-z]\.){1,5}[a-z]{2,5}$/i;
        if(emailReg.test(email)){
            $scope.checkData.emailCheck = 'm';
            return true;
        }else if(!emailReg.test(email) || email == undefined){
            $scope.checkData.emailCheck = 'f';
            return false;
        }
    }

    //http 请求数据
    $scope.httpTest1 = function () {
        //var nameCheckFun = $scope.provingUserName();
        //var passwordCheck = $scope.provingPassword();
        //var confirmPasswordCheck = $scope.provingConFirmPassword();
        //var emailCheck = $scope.provingEmail();
        var nameStatus = $scope.checkData.nameCheck;
        var PasswordStatus = $scope.checkData.confirmPasswordCheck;
        var confirmPasswordStatus = $scope.checkData.nameCheck;
        var emailStatus = $scope.checkData.emailCheck;
        // 打印报错不执行下一步???
        //console.log(nameCheckFun);// 为什么是 true
        //console.log(passwordCheck);
        //console.log(confirmPasswordCheck);
        //console.log(emailCheck);
        // 用下面的方法 结果很尴尬
        //if(nameCheckFun && passwordCheck && confirmPasswordCheck && emailCheck){

        if(nameStatus=='m' && PasswordStatus=='m' && confirmPasswordStatus=='m' && emailStatus=='m'){
            console.log($scope.email);
            console.log($scope.username);
            console.log($scope.password);
            $http({
                method: 'get',
                url: 'api/test/list.json',
                params:{
                    name:$scope.username,
                    password:$scope.password,
                    email:$scope.email
                },
                headers: {'Authorization':'code_bunny'}
            }).success(function(data,status,headers,config){
                $scope.data = data.code;
            }).error(function(data,status,headers,config){
                console.log(data);
            });
        }else {
            alert("请将验证信息填写完整!");
        }

    }
});
/*

 */
app.directive('tipMessage', function () {
    return {
        restrict: 'E',
        scope:true,
        link: function (scope,element,attrs) {

        },
        templateUrl:'./tem/tip-message.html',
        replace:true //是否替换掉页面中的标签
    }
=======


var app = angular.module('myApp',[]);
app.controller('myCtrl', function ($scope,$http) {
    //校验初始值
    $scope.checkData = {
        'nameCheck': 'initial',
        'passwordCheck': 'initial',
        'confirmPasswordCheck': 'initial',
        'emailCheck': 'initial',

    };
    $scope.tipMessageData = {
        'show' : false,
        'unText': '',
        'pwText': '',
    };
    //校验用户名
    $scope.provingUserName = function () {
        var name = $scope.username,
            unRight = '密码格式正确',//////////////////////////////////////
            unWrong = '密码为6-20的字母和数字组合',
            nameReg =/^[a-zA-Z]{5,10}$/i;
        //当name没有值为 undefined时,正则匹配为什么会成功;
        if(nameReg.test(name) && typeof name !== "undefined"){
            $scope.checkData.nameCheck = 'm';
            return true;
        }else if(!nameReg.test(name) || typeof name === "undefined"){
            $scope.checkData.nameCheck = 'f';
            return false;
        }
    }

    //校验密码
    $scope.provingPassword = function () {
        var password = $scope.password,
            pwRight = '密码格式正确',
            pwWrong = '密码为6-20的字母和数字组合',
            passwordReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
        if(passwordReg.test(password)){
            $scope.checkData.passwordCheck = true;
            $scope.tipMessageData.show = true;
            $scope.tipMessageData.pwText = pwRight;
            return true;
        }else if(!passwordReg.test(password) ||  password == undefined){
            $scope.checkData.passwordCheck = 'f';
            $scope.tipMessageData.show = true;
            $scope.tipMessageData.pwText = pwWrong;
            return false;
        }
    }

    //确认密码
    $scope.provingConFirmPassword = function () {
        var conFirmPassword = $scope.conFirmPassword,
            password = $scope.password;
        if(conFirmPassword == password){
            $scope.checkData.confirmPasswordCheck = 'm';
            return true;
        }else{
            $scope.checkData.confirmPasswordCheck = 'f';
            return false;
        }
    }

    //校验邮箱
    $scope.provingEmail = function () {
        var email = $scope.email,
            emailReg = /^[0-9a-z][_\.0-9a-z\-]{0,41}@([0-9a-z][0-9a-z\-]{0,30}[0-9a-z]\.){1,5}[a-z]{2,5}$/i;
        if(emailReg.test(email)){
            $scope.checkData.emailCheck = 'm';
            return true;
        }else if(!emailReg.test(email) || email == undefined){
            $scope.checkData.emailCheck = 'f';
            return false;
        }
    }

    //http 请求数据
    $scope.httpTest1 = function () {
        //var nameCheckFun = $scope.provingUserName();
        //var passwordCheck = $scope.provingPassword();
        //var confirmPasswordCheck = $scope.provingConFirmPassword();
        //var emailCheck = $scope.provingEmail();
        var nameStatus = $scope.checkData.nameCheck;
        var PasswordStatus = $scope.checkData.confirmPasswordCheck;
        var confirmPasswordStatus = $scope.checkData.nameCheck;
        var emailStatus = $scope.checkData.emailCheck;
        // 打印报错不执行下一步???
        //console.log(nameCheckFun);// 为什么是 true
        //console.log(passwordCheck);
        //console.log(confirmPasswordCheck);
        //console.log(emailCheck);
        // 用下面的方法 结果很尴尬
        //if(nameCheckFun && passwordCheck && confirmPasswordCheck && emailCheck){

        if(nameStatus=='m' && PasswordStatus=='m' && confirmPasswordStatus=='m' && emailStatus=='m'){
            console.log($scope.email);
            console.log($scope.username);
            console.log($scope.password);
            $http({
                method: 'get',
                url: 'api/test/list.json',
                params:{
                    name:$scope.username,
                    password:$scope.password,
                    email:$scope.email
                },
                headers: {'Authorization':'code_bunny'}
            }).success(function(data,status,headers,config){
                $scope.data = data.code;
            }).error(function(data,status,headers,config){
                console.log(data);
            });
        }else {
            alert("请将验证信息填写完整!");
        }

    }
});
/*

 */
app.directive('tipMessage', function () {
    return {
        restrict: 'E',
        scope:true,
        link: function (scope,element,attrs) {

        },
        templateUrl:'./tem/tip-message.html',
        replace:true //是否替换掉页面中的标签
    }
>>>>>>> e32005a09f7cac47af26209009dd5456b66ff27c
})