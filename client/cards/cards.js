Meteor.subscribe('cards');

Template.Cards.helpers({
  // cards: ()=> {
  //   return Cards.find({});
  // },
  cards: ()=> {
    let dl = limit | 12;
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
