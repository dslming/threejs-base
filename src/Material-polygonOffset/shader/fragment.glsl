// tAudioData: 0~64数组,只在 tAudioData[0].a 有数值,该数值表示该通道上的音值大小。
uniform sampler2D tAudioData;
uniform float style;
varying vec2 vUv;

void main() {
   vec3 backgroundColor = vec3( 0.8, 0.8, 0.8 );
   vec3 color = vec3( 0.0, 0.65, 0.97 );

   float f = texture2D( tAudioData, vec2( vUv.x, 1.0 ) ).a;
   float i2 = step( vUv.y, f ) * step( f - 0.0125, vUv.y );
   float i1 = step(vUv.y, f);

   float i;
   if(style == 1.0) {
      i = i1;
   } else {
      i = i2;
   }
   vec3 tt = mix(backgroundColor, color, i );
   gl_FragColor = vec4(tt,1.0);
}
