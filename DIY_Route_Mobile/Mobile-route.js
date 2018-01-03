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

			for (var i = 0; i < params.length; i++) {
				var item = params[i].split('=')
				query[item[0]] = item[1]
			}
			return {
				path: hashName,
				query: query
			}
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
				self.urlChange();
			});
			// 异步引入 js 通过回调传递参数
			window.SPA_RESOLVE_INIT = null;
		},
		refresh: function (currentHash) {
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
		urlChange: function () {
			var currentHash = util.getParamsUrl();
			if (this.routers[currentHash.path]) {
				this.refresh(currentHash)
			}else {
				// 不存在的地址重定向到首页
				location.hash = '/index'
			}
		},
		// 单层路由注册
		map: function (path, callback) {
			// 过滤空格
			path = path.replace(/\s*/g, '');
			if(callback && Object.prototype.toString.call(callback) === '[object Function]') {
				this.routers[path] = {
					// 回调
					callback: callback,
					fn: null	//存储异步文件状态
				}
			}
		},
		beforeFun: function (callback) {
			if(callback && Object.prototype.toString.call(callback) === '[object Function]') {
				this.beforeFun = callback;
			}else {
				console.trace('路由切换前钩子函数不正确')
			}
		},
		afterFun: function (callback) {
			if(callback && Object.prototype.toString.call(callback) === '[object Function]') {
				this.afterFun = callback;
			}else {
				console.trace('路由切换后钩子函数不正确')
			}
		},
		// 路由异步懒加载 js 文件
		asyncFun: function (file, transition) {
			var self = this;
			if (self.routers[transition.path].fn) {
				self.afterFun && self.afterFun(transition);
				self.routers[transition.path].fn(transition);
			}else {
				console.log('开始异步下载 js ' + file);
				var _body = document.getElementsByTagName('body')[0];
				var scriptEle = document.createElement('script');
				scriptEle.type = 'text/javascript';
				scriptEle.src = file;
				scriptEle.async = true;
				SPA_RESOLVE_INIT = null;
				scriptEle.onload = function () {
					console.log('下载' + file + '完成');
					self.afterFun && self.afterFun(transition);
					self.routers[transition.path].fn = SPA_RESOLVE_INIT;
					self.routers[transition.path].fn(transition);
				}
				_body.appendChild(scriptEle);
			}
		},
		syncFun: function (callback, transition) {
			this.afterFun && this.afterFun(transition);
			callback && callback(transition);
		}
	}
	// 注册到全局
	window.Router = new Router();

})()