import React, { useState, useEffect, useCallback, useRef } from 'react';
import WaveSurfer from 'wavesurfer.js';
import TimelinePlugin from 'wavesurfer.js/dist/plugin/wavesurfer.timeline.min.js';
const song = require('./song.mp3');

// import MinimapPlugin from 'wavesurfer.js/dist/plugin/wavesurfer.minimap.min.js';
// import CursorPlugin from 'wavesurfer.js/dist/plugin/wavesurfer.cursor.min.js';
function App() {
  const waveformRef = useRef();
  const [isPause, setIsPause] = useState(true);
  const wavesurferRef = useRef(null);

  const initWavesurfer = useCallback(() => {
    try {
      wavesurferRef.current = WaveSurfer.create({
        container: waveformRef.current,
        // 光标的填充颜色，指示播放头的位置
        cursorColor: 'red',
        // 更改波形容器的背景颜色。
        backgroundColor: 'gray',
        // 光标后的波形填充颜色。
        waveColor: 'violet',
        // 光标后面的波形部分的填充色。当progressColor和waveColor相同时，完全不渲染进度波
        progressColor: 'purple',
        // 音频播放时间轴
        backend: 'MediaElement',
        mediaControls: true,
        // 波形高度
        height: 32,
        plugins: [
          // 时间轴插件
          TimelinePlugin.create({
            container: '#wave-timeline'
          })
          // 光标插件
          // CursorPlugin.create({
          //   showTime: true,
          //   opacity: 1,
          //   customShowTimeStyle: {
          //     'background-color': '#000',
          //     color: '#fff',
          //     padding: '2px',
          //     'font-size': '10px',
          //   },
          // }),
          // TimelinePlugin.create({
          //   container: waveformRef.current,
          // }),
          // MinimapPlugin.create(),
        ]
      });
      console.log(wavesurferRef, 'wafffgg');
      wavesurferRef.current.load(song);
      // wavesurferRef.current.setMute(true); // 设置静音
      wavesurferRef.current.on('finish', () => {
        console.log('播放结束');
        wavesurferRef.current.stop();
        setIsPause(true);
      });
    } catch (e) {
      console.log(e);
    }
  }, []);

  const onTogglePlay = () => {
    wavesurferRef.current?.playPause();
    setIsPause((bool) => !bool);
  };

  useEffect(() => {
    initWavesurfer();
  }, [initWavesurfer]);

  return (
    <div>
      <div ref={waveformRef} />
      <div id="wave-timeline" />
      <div>
        <button type="button" onClick={onTogglePlay}>
          {isPause ? '播放' : '暂停'}
        </button>
        <button
          type="button"
          onClick={() => {
            console.log(
              wavesurferRef.current.getDuration(),
              'wavesurferRef.current.getDuration())'
            );
          }}
        >
          时长
        </button>
        <button
          type="button"
          onClick={() => {
            console.log(wavesurferRef.current.getCurrentTime(), 'currentTime');
          }}
        >
          当前时间
        </button>
        <button
          type="button"
          onClick={() => {
            wavesurferRef.current.skipForward(20);
          }}
        >
          前进
        </button>
        <button
          type="button"
          onClick={() => {
            wavesurferRef.current.skipBackward(20);
          }}
        >
          后退
        </button>
        <button
          type="button"
          onClick={() => {
            wavesurferRef.current.stop();
          }}
        >
          停止
        </button>
      </div>
    </div>
  );
}

export default App;
