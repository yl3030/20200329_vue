var name = new Vue({
	el: "#content",
	data: {
        // 空文字
        name: "",
        // 空值
        repos:null
	},
	methods: {
        // 取得資料庫
		getRepos: function() {
            console.log("取得資料庫：" + this.name);
            // axios 取得資料（資料連結API）
            axios
            .get(`https://api.github.com/users/${this.name}/repos`)
            .then(response=>{this.repos = response.data;
            console.log(response.data)});
        }
	}
});
