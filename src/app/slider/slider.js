angular
    .module('app')
    .component('slider', {
        templateUrl: 'app/slider/slider.html',
        controllerAs: 'vm',
        controller: function() {
            console.log('alive');

            this.foo = 'bar';

            this.click = function() {
                this.foo = 'baz'
            }

            this.count = 3;

            this.getNumber = function(num) {
                return new Array(num);
            }

            // $('slider').append('div').text('jquery');
        }
    });
