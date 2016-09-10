Vue.use(VueRouter)

// create App instance
var App = Vue.extend({})

//create Router instance
var router = new VueRouter()

//add your routes and their components
router.map({
    '/foo': {
        component: {
            template: '<p>This is foo!</p>'
        }
    },
    '/bar': {
        component: {
            path: '',
            data: function() {
                return {
                    text: "Hello World!"
                };
            }
        }
    }
})

router.start(App, '#app');
