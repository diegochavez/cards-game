
Cards = new Mongo.Collection("cards");

Cards.allow({
  insert:function() {
    return true;
  }
});

CardSchema = new SimpleSchema({
  name:{
    type: String,
    label: "Name"
  },
  description:{
    type: String,
    label: "Description"
  },
  power:{
    type: Number,
    label: "Power"
    //autoValue: function(){ return this.userId}
  },
  image: {
    type: String,
    label: "Image"
  },
  createdAt:{
    type:Date,
    label: "Created At",
    autoValue: ()=> new Date,
    autoform:{
      type:"hidden"
    }
  }

});

Cards.attachSchema(CardSchema);
