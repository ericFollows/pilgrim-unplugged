Template.Blog.helpers({
	"listPosts": function() {
		return Posts.find();
	},
	"synopsis": function() {
		var string = this.postBody.slice(0, 250);
		return string;
	}
});
  // return the posts matching the query set in the routes.
  // return Posts.find(Session.get('postQuery'));
