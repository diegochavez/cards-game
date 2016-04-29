FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render('MainLayout',{main:'Home'})
    }
});

FlowRouter.route('/cards', {
    name: 'add-card',
    action(){
        BlazeLayout.render('MainLayout', {main: 'Cards'});
    }
});

FlowRouter.route('/game', {
		triggersEnter: [AccountsTemplates.ensureSignedIn],
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

AccountsTemplates.configureRoute('signIn', {
  layoutType: 'blaze',
  name: 'signin',
  path: '/login',
  template: 'Login',
  layoutTemplate: 'MainLayout',
  contentRegion: 'main'
});

FlowRouter.route('/logout',{
  name:'logout',
  triggersEnter: [function(context, redirect) {
  AccountsTemplates.logout();
  redirect('/');
}],
  action(){
    console.log('Logout');
  }
})
