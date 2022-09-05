import Musics from '../musics';
import MusicCards from './MusicCards';
import Footer from './Footer';
import { useState } from 'react';
import '../App.css';

export default function Main() {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [url, setUrl] = useState('');
  const [playing, setPlaying] = useState(false);

  return (
    <>
      <main>
        <h1>The best play list</h1>
        <div className='cards'>

          {Musics.map((music) => (

            <MusicCards
              key={music.id}
              title={music.title}
              artist={music.artist}
              description={music.description}
              url={music.url}
              cover={music.cover}
              setTitle={setTitle}
              setArtist={setArtist}
              setUrl={setUrl}
              setPlaying={setPlaying}
            />
          ))}
        </div>
      </main>

      <Footer
        title={title}
        setTitle={setTitle}
        artist={artist}
        setArtist={setArtist}
        url={url}
        setUrl={setUrl}
        playing={playing}
        setPlaying={setPlaying}
      />
    </>
  )
}