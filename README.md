# maptalks-gl-layers

maptalks webgl 图层的汇总包，包含了@maptalks命名空间下webgl基础设施和所有webgl图层插件。

使用时无需再单独安装和引入其他webgl插件，而可以统一从此包中安装应用

## 包含的插件

* @maptalks/gl
* @maptalks/vt
* @maptalks/gltf-layer
* @maptalks/3dtiles

## 用法

```shell
npm i @maptalks/maptalks-gl-layers
```

## 程序示例

```js
import { GroupGLLayer, VectorTileLayer, GLTFMarker, GLTFLayer } from '@maptalks/gl-layers';

const map = new maptalks.Map('map', {
    center: [0, 0],
    zoom: 2
});
const vtLayer = maptalks.VectorTileLayer('vt', {
    urlTemplate: 'http://tile.maptalks.com/test/planet-single/{z}/{x}/{y}.mvt',
    spatialReference: 'preset-vt-3857'
});

const groupLayer = new maptalks.GroupGLLayer('group', [vt]).addTo(map);
```

## CDN

也可以通过CDN引用umd格式的汇总包。

```html
<script type="text/javascript" src="https://unpkg.com/maptalks/dist/maptalks.min.js"></script>
<script type="text/javascript" src="https://unpkg.com/@maptalks/gl-layers/dist/maptalks-gl-layers.js"></script>
<script type="text/javascript">
    const map = new maptalks.Map('map', {
        center: [0, 0],
        zoom: 2
    });
    const vtLayer = maptalks.VectorTileLayer('vt', {
        urlTemplate: 'http://tile.maptalks.com/test/planet-single/{z}/{x}/{y}.mvt',
        spatialReference: 'preset-vt-3857'
    });

    const groupLayer = new maptalks.GroupGLLayer('group', [vt]).addTo(map);
</script>
```