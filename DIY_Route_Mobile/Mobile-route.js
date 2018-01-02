(function () {

	// 获取路由路径和详细参数
	var util = {
		getParamsUrl: function () {
			var hashDetail = location.hash.split('?'),
				// 路由地址
				hashName = hashDetail[0].split('#')[1],
				// 参数内容
				params = hashDetail[1] ? hashDetail[1].split('&') : [],
				query = {};

			for ()
		}
	}


	// hash 实现路由
	function Router() {
		this.routers = {};
		this.beforeFun = null;
		this.afterFun = null;
	};

	Router.prototype = {
		init: function () {
			var self = this;
			// 页面加载匹配路由
			window.addEventListener('load', function () {
				self.urlChange();
			});
			// 路由切换
			window.addEventListener('hashchange', function () {
				self.urlchange();
			});
			// 异步引入 js 通过回调传递参数
			window.SPA_RESOLVE_INIT = null;
		},
		refresh: function () {
			var self = this;
			if (self.beforeFun) {
				self.beforeFun ({
					to: {
						path: currentHash.path,
						query: currentHash.query
					},
					next: function () {
						self.routers[currentHash.path].callback.call(self, currentHash);					
					},
				})
			}else {
				self.routers[currentHash.path].callback.call(self, currentHash);
			}
		},
		// 路由处理
		urlchange: function () {
			var currentHash = util.getParamsUrl();
		},
	}

})()