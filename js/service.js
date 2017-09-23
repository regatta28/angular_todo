angular.module('TodoService', [])
    .factory('TodoAPIService', function($http) {
        TodoAPIService = {
            getTodos: function(url, data, token) {
                header = "Authorization: JWT " + token;
                return $http.get(url, {params:{"username": data}}, header);
            },
            createTodo: function(url, data, token) {
                header = "Authorization: JWT " + token;
                return $http.post(url, data, header);
            }
        };
        return TodoAPIService;
    });