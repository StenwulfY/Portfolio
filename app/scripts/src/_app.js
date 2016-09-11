Vue.use(VueRouter)

// create App instance
var App = Vue.extend({})

//create Router instance
var router = new VueRouter()

//add your routes and their components
router.map({
    '/': {
        component: {
            template: '#start',

            data: function() {
                return {

                };
            }
        }
    },

    '/about': {
        component: {
            template: '#about_me',

            data: function() {
                return {

                };
            }
        }
    },

    '/portfolio': {
        component: {
            template: '#portfolio',

            data: function() {
                return {

                };
            }
        }
    },

    '/skills': {
        component: {
            template: '#skills',

            data: function() {
                return {

                };
            }
        }
    },

    '/contact': {
        component: {
            template: '#contact',

            data: function() {
                return {

                };
            }
        }
    }
});

router.start(App, '#app');
