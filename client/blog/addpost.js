
Template.AddPost.events({
	'submit #postForm': function(event) {
		var submitPostDate = event.target.postDate.value;
		var submitPostTitle = event.target.postTitle.value;
		var submitPostSlug = event.target.postSlug.value;
		var submitPostBody = event.target.postBody.value;
		
		Posts.insert({
    		postDate: submitPostDate,
    		postTitle: submitPostTitle,
    		postSlug: submitPostSlug,
    		postBody: submitPostBody
		});
	}
});
