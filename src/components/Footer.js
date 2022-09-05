import { useRef } from 'react';
import '../App.css';
import StopButton from '../assets/stop.svg';
import PrevButton from '../assets/previous.svg';
import PlayButton from '../assets/play.svg';
import PauseButton from '../assets/pause.svg';
import NextButton from '../assets/next.svg';
import Musics from '../musics';

export default function Footer({ title,
  setTitle,
  artist,
  setArtist,
  url,
  setUrl,
  playing,
  setPlaying }) {
  const audioRef = useRef(null);
  const currentTrack = Musics.find(track => track.url === url);

  function handleStop() {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setPlaying(false);
  }

  function handlePrevButton() {
    let previousTrack = Musics.indexOf(currentTrack) - 1;

    if (previousTrack < 0) {
      previousTrack = Musics.length - 1;
    }

    setTitle(Musics[previousTrack].title);
    setArtist(Musics[previousTrack].artist);
    setUrl(Musics[previousTrack].url);
    setPlaying(!playing);
  }

  function handlePlayPause() {
    if (!url) {
      return;
    }
    setPlaying(!playing);

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  }

  function handleNextButton() {
    let nextTrack = Musics.indexOf(currentTrack) + 1;

    if (nextTrack >= Musics.length) {
      nextTrack = 0;
    }

    setTitle(Musics[nextTrack].title);
    setArtist(Musics[nextTrack].artist);
    setUrl(Musics[nextTrack].url);
    setPlaying(!playing);
  }

  return (
    <footer>
      <div className='infos'>
        <h2>{title}</h2>
        <span>{artist}</span>
      </div>

      <div className='player'>
        <div className='player__buttons'>

          <img onClick={() => handleStop()} src={StopButton} alt='stop button' className='button' />

          <img onClick={() => handlePrevButton()} src={PrevButton} alt='previous button' className='button' />

          <img onClick={() => handlePlayPause()} src={playing ? PauseButton : PlayButton} alt='pause button' className='main-button' />

          <img onClick={() => handleNextButton()} src={NextButton} alt='next button' className='button' />
        </div>

        <audio ref={audioRef} src={url} type="audio/mp3" />
      </div>
    </footer >
  )
}