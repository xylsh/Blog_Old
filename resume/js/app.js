var deerResume = angular.module('deerResume', ['ngRoute','wiz.markdown','ngNotify','angularLocalStorage']);
//var baseurl = '/';
var baseurl = 'http://cvbox.sinaapp.com/';

deerResume.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/admin', {
        templateUrl: 'admin.html',
        controller: 'adminCtrl'
      }).
      when('/resume', {
        templateUrl: 'resume.html',
        controller: 'resumeCtrl'
      }).
      otherwise({
        redirectTo: '/resume'
      });
  }]);


deerResume.controller('resumeCtrl', function ($scope,$http,storage) {

  storage.bind($scope,'vpass');

  var url = '';
  if( $scope.vpass && $scope.vpass.length > 3 )
    url = baseurl+"?a=show&domain="+encodeURIComponent(window.location)+"&vpass="+encodeURIComponent($scope.vpass);
  else 
    url = baseurl+"?a=show&domain="+encodeURIComponent(window.location);

  
  $http.get(url).success(function( data ){
      $scope.resume = data;

    }); 

  
  $scope.password = function( vpass )
  {
    $scope.vpass = vpass;
    window.location.reload();
  }

});

deerResume.controller('adminCtrl', function ($scope,$http,storage,ngNotify) {

  storage.bind($scope,'wpass');
  storage.bind($scope,'vpass');
  storage.bind($scope,'apass');

  var url = '';
  if( $scope.vpass && $scope.vpass.length > 3 )
    url = baseurl+"?a=show&domain="+encodeURIComponent(window.location)+"&vpass="+encodeURIComponent($scope.vpass);
  else 
    url = baseurl+"?a=show&domain="+encodeURIComponent(window.location);

  $http.get(url).success(function( data ){
      $scope.resume = data;
      $scope.resume.admin_password = $scope.apass;
      $scope.resume.view_password = $scope.wpass;
    }); 

  $scope.save = function( item )
  {
    $http
    ({
      method: 'POST',
      url: baseurl+"?a=update&domain="+encodeURIComponent(window.location),
      data: $.param({'title':item.title,'subtitle':item.subtitle,'content':item.content,'view_password':item.view_password,'admin_password':item.admin_password}),
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    }).success(
      function( data ){
        //$scope.notice('');
        if( data.errno == 0 )
        {
          $scope.apass = item.admin_password;
          $scope.wpass = item.view_password;
          ngNotify.set(data.notice,'success');
          
        }
        else
        {
          ngNotify.set(data.error,'error');
        }
      }
          
    );
  };

  // 请求云端数据，有三种情况：
  // 1 云端没有任何记录，这个时候显示默认模板
  // 2 云端已经存在数据，且设置有阅读密码，这时候提示输入密码
  
  // 右上角留入口


});

// ============
function makepdf()
{
  post('http://pdf.ftqq.com',{'title':$('#drtitle').html(),'subtitle':$('#drsubtitle').html(),'content':$('#cvcontent').html(),'pdfkey':'jobdeersocool'});
}

function post(path, params, method) {
    method = method || "post"; // Set method to post by default if not specified.

    // The rest of this code assumes you are not using a library.
    // It can be made less wordy if you use one.
    var form = document.createElement("form");
    form.setAttribute("method", method);
    form.setAttribute("action", path);
    form.setAttribute("target", "_blank");

    for(var key in params) {
        if(params.hasOwnProperty(key)) {
            var hiddenField = document.createElement("input");
            hiddenField.setAttribute("type", "hidden");
            hiddenField.setAttribute("name", key);
            hiddenField.setAttribute("value", params[key]);

            form.appendChild(hiddenField);
         }
    }

    document.body.appendChild(form);
    form.submit();
}


function pdf()
{
  var doc = new jsPDF();
  var specialElementHandlers = {
  '.action-bar': function(element, renderer){
      return true;
    }
  };

  doc.fromHTML($('#resume_body').get(0), 15, 15, {
    'width': 170, 
    'elementHandlers': specialElementHandlers
  });

  doc.output("dataurlnewwindow");
}