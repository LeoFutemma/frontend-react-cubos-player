import '../App.css';

export default function MusicCards({ title, artist, description, url, cover, setTitle, setArtist, setUrl, setPlaying }) {

  function handleSelectedSong() {
    setTitle(title);
    setArtist(artist);
    setUrl(url);
    setPlaying(false);
  }

  return (
    <>
      <div className='card' onClick={() => handleSelectedSong()}>
        <img src={cover} alt='album cover' />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </>
  )
}