import { Node, Shaders } from 'gl-react'
import React from 'react'
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource'

const shaders = Shaders.create({
  Normal: {
    frag: `
      precision highp float;
      varying vec2 uv;

      uniform sampler2D inputImageTexture;

      void main () {

        vec3 texel = texture2D(inputImageTexture, uv).rgb;
        gl_FragColor = vec4(texel, 1.0);
      }`
  }
});

module.exports = ({ children: inputImageTexture }) => (
  <Node
    shader={shaders.Normal}
    uniforms={{
      inputImageTexture,
    }}
  />
);
