Template.Post.helpers({
	'listPost': function() {
		return Posts.findOne();
	}
});

  // use the 'postId' session variable to retrieve the correct session
  // based on the url.
  // return Posts.findOne({_id: Session.get('postId')});