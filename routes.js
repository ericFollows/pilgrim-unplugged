Router.configure({
	layoutTemplate: 'Main'
});

Router.route('/', {
	name: 'home',
	template: 'Home'
});

Router.route('/blog', {
	name: 'blog',
	template: 'Blog'
});

	Router.route('/blog/:postSlug', {
		name: 'post',
		template: 'Post',
		data: function() {
			var currentPost = this.params.postSlug;
			return Posts.findOne({"postSlug": currentPost});
		}
	});

Router.route('/gallery', {
	name: 'gallery',
	template: 'Gallery'
});

	Router.route('/gallery/photography', {
		name: 'photography',
		template: 'Photography'
	});

	Router.route('/gallery/graphicdesign', {
		name: 'graphicDesign',
		template: 'GraphicDesign'
	});

	Router.route('/gallery/webdevelopment', {
		name: 'webDevelopment',
		template: 'WebDevelopment'
	});

Router.route('/about', {
	name: 'about',
	template: 'About'
});

Router.route('/contact', {
	name: 'contact',
	template: 'Contact'
});

Router.route('/signin', {
	name: 'signIn',
	template: 'SignIn'
});

Router.route('/addpost', {
	name: 'addPost',
	template: 'AddPost'
});
