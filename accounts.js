//file: accountsjs
//author: patrick kage

AccountsTemplates.configure({
        onSubmitHook: function() {
                console.log('login hook running');

                // DO SOMETHING HERE

                // example: Router.go('somewhere');
                // you may need to make it fire on a timeout, because sometimes it's weird
                // there's probably a better way of doing it, but I haven't found it

                // here, i'll set something up
                Router.go('home');
                Meteor.setTimeout(function() {
                        Router.go('home');
                }, 150);
        }
});