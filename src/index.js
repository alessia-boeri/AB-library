angular
  .module('app', ['ui.router'])
    .config(function($stateProvider){


        $stateProvider
            .state({
                name: 'home',
                url: '/',
                component: 'app'
            })
            .state({
                name: 'slider',
                url: '/slider',
                component: 'slider'
            })
    });
