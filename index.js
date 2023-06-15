import { transcoders } from '@maptalks/gl';
if (typeof window !== 'undefined') {
    // transcoders are registered at maptalksgl namespace
    window.maptalksgl = window.maptalksgl || {};
    window.maptalksgl.transcoders = window.maptalksgl.transcoders || transcoders;
}
export * from '@maptalks/gl';
export * from '@maptalks/vt';
export * from '@maptalks/3dtiles';
export * from '@maptalks/gltf-layer';
export * from '@maptalks/transform-control';
export * from '@maptalks/msd-json-loader';
export * from '@maptalks/video-layer';
export * from '@maptalks/analysis';
