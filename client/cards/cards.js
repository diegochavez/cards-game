Meteor.subscribe('cards');

Template.Cards.helpers({
  cards: ()=> {
    let dl = Session.get('limit') | 12;
     all = Cards.find({},{skip:0,limit:dl}).fetch();
     chunks = [];
     size = 4;
     while (all.length > size) {
         chunks.push({ row: all.slice(0, size)});
         all = all.slice(size);
     }
     chunks.push({row: all});
     return chunks;
 }
});
Template.Cards.events({
	'click .btn-loadmore': (limit)=>{
		let loadmore = Session.get('limit');
		console.log('Load More', loadmore);
		Session.set('limit',loadmore + 12);
	}
})
