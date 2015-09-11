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

	Router.route('/blog/:_id', function() {
		var post = Post.findOne({_id: this.params._id});
		this.render('Post', {data: post});
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