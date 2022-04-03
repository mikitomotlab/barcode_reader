var videoStreamInUse = null;

let preview = document.getElementById("preview");
let recording = document.getElementById("recording");
let startButton = document.getElementById("startButton");
let stopButton = document.getElementById("stopButton");
let downloadButton = document.getElementById("downloadButton");
let logElement = document.getElementById("log");

let recordingTimeMS = 5000;

function startVideo() {
    console.info('入出力デバイスを確認してビデオを開始するよ！');

    Promise.resolve()
        .then(function () {
            return navigator.mediaDevices.enumerateDevices();
        })
        .then(function (mediaDeviceInfoList) {
            console.log('使える入出力デバイスs->', mediaDeviceInfoList);

            var videoDevices = mediaDeviceInfoList.filter(function (deviceInfo) {
                return deviceInfo.kind == 'videoinput';
            });
            if (videoDevices.length < 1) {
                throw new Error('ビデオの入力デバイスがない、、、、、。');
            }

            return navigator.mediaDevices.getUserMedia({
                audio: false,
                video: {
                    deviceId: videoDevices[0].deviceId
                }
            });
        })
        .then(function (mediaStream) {
            /*const video = document.getElementById('myVideo');
            mediaStream = await getDeviceStream({
              video: { width: 640, height: 320},
              audio: false
            });
            video.srcObject = mediaStream;*/
            console.log('取得したMediaStream->', mediaStream);
            videoStreamInUse = mediaStream;
            //document.querySelector('video').src = window.URL.createObjectURL(mediaStream);
        })
        .catch(function (error) {
            console.error('ビデオの設定に失敗、、、、', error);
        });


    window.URL = window.URL || window.webkitURL;
    navigator.getUserMedia  = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

    var mediaStream = navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
    })//.then(mediaStream => {
      //preview.srcObject = stream;
      //downloadButton.href = stream;
      //preview.captureStream = preview.captureStream || preview.mozCaptureStream;
      //return new Promise(resolve => preview.onplaying = resolve);
    //})

      var video = document.getElementById('camera');

      import React, { Component } from 'react';

      class Example extends Component {
        constructor(props) {
          super(props);
          this.videoTag = React.createRef()
        }

        componentDidMount() {
          // getting access to webcam
         navigator.mediaDevices
          .getUserMedia({video: true})
          .then(stream => this.videoTag.current.srcObject = stream)
          .catch(console.log);
        }

        render() {
          return (
            <div>
            <video ref={this.videoTag} autoPlay />
            </div>
          )
        }
      }
      //video.src = window.URL.createObjectURL(mediaStream);
      //video.srcObject = mediaStream;
      return video;
      return mediaStream;
    }


var video, mediaStream = startVideo();

document.addEventListener("DOMContentLoaded", function(video, mediaStream){
  document.getElementById('take_picture').addEventListener('click', () => {
    if (mediaStream) {
      var canvas = document.getElementById('canvas');
      //var video = document.getElementById('camera');
      //ideo.src = window.URL.createObjectURL(mediaStream);
      //canvasの描画モードを2sに
      //var ctx = canvas.getContext('2d');
      //var img = document.getElementById('img');
      const img = document.querySelector('#myimg');

      //videoの縦幅横幅を取得
      var w = video.offsetWidth;
      var h = video.offsetHeight;

      console.error('mediaStream_w', w);

      //同じサイズをcanvasに指定
      canvas.setAttribute("width", w);
      canvas.setAttribute("height", h);

      //canvasにコピー
      ctx.drawImage(video, 0, 0, w, h);
      //imgにpng形式で書き出し
      img.src = canvas.toDataURL('image/png');
    }
  });
}, false);


function stopVideo() {
    console.info('ビデオを止めるよ！');

    videoStreamInUse.getVideoTracks()[0].stop();

    if (videoStreamInUse.active) {
        console.error('停止できかた、、、', videoStreamInUse);
    } else {
        console.log('停止できたよ！', videoStreamInUse);
    }

  /*  const video = document.getElementById('myVideo');
    const tracks = stream.getTracks();

    tracks.forEach((track) => {
      track.stop();
    });

    video.srcObject = null;*/
}
