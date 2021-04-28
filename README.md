# 基础

## 配置

### 主应用

>主应用中需要安装qiankun依赖，在主应用目录下 `yarn add qiankun` 或者 `npm install qiankun`

[registerMicroApps配置](https://qiankun.umijs.org/zh/api#registermicroappsapps-lifecycles)

```javascript
// main.js
import {registerMicroApps, start} from 'qiankun';

registerMicroApps(
	[
        {
            name: 'oneApp', // 必选，微应用的名称，微应用之间必须确保唯一
            entry: '//localhost:9517', // 默认会加载这个html 解析里面的js 动态的执行（子应用必须支持跨域， 请求方式fetch）
            container: '#vueOne', // 必选，微应用的容器节点的选择器或者 Element 实例
            activeRule: '/one', // 必选，微应用的激活规则
            loader: loading => {}, // 可选，loading 状态发生变化时会调用的方法
            props: {} // 可选，主应用需要传递给微应用的数据
        },
        {
            name: 'twoApp',
            entry: '//localhost:9518', 
            container: '#vueTwo',
            activeRule: '/two'
        }
    ],
    {
        // 挂载前回调
        beforeLoad: app => {
			console.log("before load", app);
		},
        // 挂载后回调
        beforeMount: [
            app => {
                console.log("before mount", app);
            }
        ],
        // 卸载后回调
        afterUnmount: [
            app => {
                console.log("after unload", app);
            }
        ]
    }
)
```

```vue
<!-- App.vue -->
<article>
    <!-- 基座中可以放自己的路由， 也可以引用其他字应用 -->
    <button @click="storeParamsChange">add</button>
    <el-menu :router="true" mode="horizontal">
        <el-menu-item index="/">Home</el-menu-item>
        <el-menu-item index="/one">One</el-menu-item>
        <el-menu-item index="/two">Two</el-menu-item>
    </el-menu>
    <router-view/>
    <section id="vueOne"/>
    <section id="vueTwo"/>
</article>
```

### 子应用

```javascript
// main.js
let instance = null;

function render(props) {
    instance = new Vue({
        router,
        render: h => h(App), // 这里是挂载到自己的html中，基座会拿到挂载后的html，将其插入进去
    }).$mount('#app');
}

if (window.__POWERED_BY_QIANKUN__) {
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

// 判断是否独立运行
if (!window.__POWERED_BY_QIANKUN__) {
    render();
}

// 子组件协议
export async function bootstrap(props = {}) {
}

export async function mount(props) {
    render(props);
}

export async function unmount(props) {
    instance.$destroy();
}
```

```javascript
// vue.config.js
const path = require('path');

module.exports = {
    devServer: {
        port: 9517,

        // 必须设置
        headers: {
            'Access-Control-Allow-Origin': '*'
        },

        overlay: {
            warnings: false, //不显示警告
            errors: false	//不显示错误
        }
    },

    configureWebpack: {
        
        // 必须设置
        output: {
            library: 'oneApp',
            libraryTarget: 'umd'
        },

        resolve: {
            alias: {
                '@': path.join(__dirname, 'src')
            }
        }
    },

    lintOnSave: false
};
```



## 通信

### 主应用

> 在 `main.js` 中注册 `vuex`

```javascript
// main.js
registerMicroApps(
	[
        {
            name: 'oneApp',
            // ...
            props: {
                store //共享主应用的store实例
            }
        }
    ]
)

new Vue({
    el: '#app',
    store,
    render: h => h(App),
})
```

### 子应用

> 1. 子应用使用主应用的 `store` ，可以用于主应用和子应用之间的通信。（注：`store` 可能需要持久化）
> 2. 子应用自己注册 `store` ，子应用自身使用，防止污染通信环境。

```javascript
// main.js
import selfStore from '@/store';

function render(props) {
    const store = props.store;
    Vue.observable(store); // 使store可响应
    
    Vue.prototype.$selfStore = selfStore;

    instance = new Vue({
        router,
        store,
        render: h => h(App), // 这里是挂载到自己的html中，基座会拿到挂载后的html，将其插入进去
    }).$mount('#app');
}
```



## 部署

### Hash部署
[TODO]


### History部署
[TODO]


### 远程部署
[TODO]


#  开发研究

## 路由跳转
[TODO]



