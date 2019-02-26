var app = new Vue({
	el: "#demo-1",
	data: {
		profile: {
			name: "Steven",
			bio: "Steven likes to eat a lot of cheese, and play guitar",
			currentAvatar: "https://pbs.twimg.com/profile_images/1025228787238096896/7w7ssbXm_400x400.jpg",
			avatar1: "https://pbs.twimg.com/profile_images/1025228787238096896/7w7ssbXm_400x400.jpg",
			avatar2: "https://yt3.ggpht.com/a-/AN66SAxDRpJRYWHnycBYMCU4X6UjtUx65QfgzPrV6Q=s900-mo-c-c0xffffffff-rj-k-no"
		},
	},
	methods: {
		toggleAvatar(){
			if (this.profile.currentAvatar == this.profile.avatar1 ){
				this.profile.currentAvatar = this.profile.avatar2;
			} else {
				this.profile.currentAvatar = this.profile.avatar1;
			}
			this.showAlert();
		}
	}
});

var app2 = new Vue({
	el: "#demo-2",
	data: {
		buttonGreen: true
	},
	methods: {
		toggleButton(){
			this.buttonGreen = !this.buttonGreen;
		}
	}
});

// Vue.component('task', {
// 	template: `
// 		<li class="task"><slot></slot></li>
// 	`
// });

// var app3 = new Vue({
// 	el: "#demo-3",
// 	data: {
// 		tasks: [
// 			'Make bed',
// 			'Take a shower',
// 			'Walk the cow'
// 		]
// 	}
// });

Vue.component('task', {
	template: `
		<li class="task"><slot></slot></li>
	`
});

Vue.component('task-list', {
	template: `
		<div>
			<h4>My Tasks</h4>
			<ul class="list-group">
				<task v-for="task in tasks">{{ task }}</task>
			</ul>
		</div>
	`,
	data(){
		return {
			tasks: [
				'Make bed',
				'Take a shower',
				'Walk the cow'
			]
		}
	}
});

var app4 = new Vue({
	el: "#demo-4",
});