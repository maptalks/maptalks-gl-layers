# maptalks-gl

[![NPM Version](https://img.shields.io/npm/v/maptalks-gl.svg)](https://github.com/maptalks/maptalks-gl-layers)

maptalks webgl 图层的汇总包，包含了[maptalks核心库](https://github.com/maptalks/maptalks.js)和@maptalks命名空间下webgl基础设施和所有webgl图层插件。

使用时无需再单独安装和引入其他webgl插件，而可以统一从此包中安装引用。

该仓库只供发布使用，请在[这里报告使用过程中的相关bug](https://github.com/maptalks/issues/issues)

## 包含的库

* maptalks
* @maptalks/gl
* @maptalks/analysis
* @maptalks/vt
* @maptalks/gltf-layer
* @maptalks/3dtiles
* @maptalks/video-layer
* @maptalks/transform-control
* @maptalks/msd-json-loader

## 汇总包格式

包含了ESM和umd两种格式，方便不同方式的引用。

## 安装

```shell
npm i maptalks-gl

#or

yarn add maptalks-gl

#or

pnpm i maptalks-gl
```

## 用法

### ESM

```js
import {
    Map,
    GroupGLLayer,
    VectorTileLayer,
    GLTFMarker,
    GLTFLayer,
    PolygonLayer
} from 'maptalks-gl';

const map = new Map('map', {
    center: [0, 0],
    zoom: 2
});
const vtLayer = new VectorTileLayer('vt', {
    urlTemplate: 'http://tile.maptalks.com/test/planet-single/{z}/{x}/{y}.mvt'
});

const groupLayer = new GroupGLLayer('group', [vtLayer]).addTo(map);

const gltfLayer = new GLTFLayer('gltflayer');
groupLayer.addLayer(gltfLayer);

const polygonLayer = new PolygonLayer('polygonlayer');
groupLayer.addLayer(polygonLayer);
//other layers
```

### CDN

也可以通过CDN引用umd格式的汇总包, 注意gl体系下的所有导出变量会自动挂载到 `maptalks` 命名空间

```html
<script type="text/javascript" src="https://unpkg.com/maptalks-gl/dist/maptalks-gl.js"></script>
<script type="text/javascript">
    const map = new maptalks.Map('map', {
        center: [0, 0],
        zoom: 2
    });
    const vtLayer = maptalks.VectorTileLayer('vt', {
        urlTemplate: 'http://tile.maptalks.com/test/planet-single/{z}/{x}/{y}.mvt'
    });

    const groupLayer = new maptalks.GroupGLLayer('group', [vtLayer]).addTo(map);

    const gltfLayer = new maptalks.GLTFLayer('gltflayer');
    groupLayer.addLayer(gltfLayer)
    const polygonLayer = new maptalks.PolygonLayer('polygonlayer');
    groupLayer.addLayer(polygonLayer);
    //other layers
</script>
```

## gl格式解码插件

如果需要引入draco，ktx2等gl格式解码插件，和以前一样，引入汇总包后，引入解码插件即可：

```js
import {
    Map,
    Geo3DTilesLayer,
    GLTFLayer
} from 'maptalks-gl';
// 可选的draco插件
import '@maptalks/transcoders.draco';
// 可选的crn纹理解析插件
import '@maptalks/transcoders.crn';
// 可选的ktx2纹理解析插件
import '@maptalks/transcoders.ktx2';
```

或者umd方式：

```html
<script type="text/javascript" src="https://unpkg.com/maptalks-gl/dist/maptalks-gl.js"></script>
<script type="text/javascript" src="https://unpkg.com/@maptalks/transcoders.draco/dist/transcoders.draco.js"></script>
<script type="text/javascript" src="https://unpkg.com/@maptalks/transcoders.crn/dist/transcoders.crn.js"></script>
<script type="text/javascript" src="https://unpkg.com/@maptalks/transcoders.ktx2/dist/transcoders.ktx2.js"></script>
```
