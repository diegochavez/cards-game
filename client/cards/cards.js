Meteor.subscribe('cards');

Template.Cards.helpers({
  // cards: ()=> {
  //   return Cards.find({});
  // },
  cards: ()=> {
     all = Cards.find({}).fetch();
     chunks = [];
     size = 4;
     while (all.length > size) {
         chunks.push({ row: all.slice(0, size)});
         all = all.slice(size);
     }
     chunks.push({row: all});
     return chunks;
 }
})
