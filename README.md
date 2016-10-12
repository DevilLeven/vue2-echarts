# Vue2-ECharts

> ECharts component for Vue.js.

Built upon ECharts 3.x & Vue.js 2.x.
*Vue-ECharts may not directly work in Vue.js 2.0.*

## Installation

### Manual

Just download `dist/vue-echarts.js` and include it in your HTML file:

```html
<script src="path/to/vue-echarts/dist/vue-echarts.js"></script>
```

### npm 

```bash
$ npm install vue2-echarts
```

### bower

```bash
$ bower install vue2-echarts
```

## Registering the component

### webpack + vue-loader
```js
import ECharts from 'vue2-echarts/src/ECharts/ECharts.vue'

// register the component to use
Vue.component('chart', ECharts)

// or register in component
export default {
  components: {
    chart: ECharts
  }
}
```

### CommonJS

```js
var Vue = require('path/to/vue')

// requiring the UMD module
var ECharts = require('path/to/vue2-echarts/dist/vue-echarts')

// or with vue-loader you can require the src directly
var ECharts = require('path/to/vue2-echarts/src/ECharts/ECharts.vue')

// register component to use
Vue.component('chart', ECharts)
```

### AMD

```js
require.config({
  paths: {
    'vue': 'path/to/vue',
    'vue-echarts': 'path/to/vue-conticon/dist/vue-echarts'
  }
})

require(['vue', 'vue-echarts'], function (Vue, ECharts) {
  // register component to use
  Vue.component('chart', ECharts)
})
```

### Global variable

The component class is exposed as `window.VueECharts`.

```js
// register component to use
Vue.component('chart', VueECharts)
```

## Using the component

```vue
<template>
<chart :options="polar"></chart>
</template>

<style>
.echarts {
  height: 300px;
}
</style>

<script>
export default {
  data: function () {
    let data = []

    for (let i = 0; i <= 360; i++) {
        let t = i / 180 * Math.PI
        let r = Math.sin(2 * t) * Math.cos(2 * t)
        data.push([r, i])
    }

    return {
      polar: {
        title: {
          text: '极坐标双数值轴'
        },
        legend: {
          data: ['line']
        },
        polar: {
          center: ['50%', '54%']
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        angleAxis: {
          type: 'value',
          startAngle: 0
        },
        radiusAxis: {
          min: 0
        },
        series: [
          {
            coordinateSystem: 'polar',
            name: 'line',
            type: 'line',
            showSymbol: false,
            data: data
          }
        ],
        animationDuration: 2000
      }
    }
  }
}
</script>
```

### Properties

* `initOptions` & `theme`

  Used to initialize ECharts instance.

* `options` **[reactive]**

  Used to update data for ECharts instance. Modifying this property will trigger ECharts' `setOptions` method.

* `group` **[reactive]**

  This property is automatically bound to the same property of the ECharts instance.

### Instance Methods

* `mergeOptions` (`setOptions` in ECharts)

  *Providing a better method name to describe the actual behavior of `setOptions.`*

* `resize`
* `dispatchAction`
* `showLoading`
* `hideLoading`
* `getDataURL`
* `clear`
* `dispose`

### Static Methods

* `connect`
* `disconnect`
* `registerMap`
* `registerTheme`

You can refer to [ECharts' API](http://echarts.baidu.com/api.html) to learn how to use the methods above.

## Local development

```bash
$ npm i
$ npm run dev
```

Open `http://localhost:8080/` to see the demo.
