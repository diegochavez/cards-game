FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render('HomeLayout')
    }
});

FlowRouter.route('/cards', {
    name: 'add-card',
    action(){
        BlazeLayout.render('MainLayout', {main: 'Cards'});
    }
});

FlowRouter.route('/game', {
    name: 'add-card',
    action(){
        BlazeLayout.render('MainLayout', {main: 'Game'});
    }
});

FlowRouter.route('/add-card', {
    name: 'add-card',
    action(){
        BlazeLayout.render('MainLayout', {main: 'NewCard'});
    }
});
