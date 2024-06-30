import { useEffect, useRef } from "react";
import Confetti from "react-confetti-boom";

interface ConfeteComponentProps {
  isVisible: boolean
}

export function ConfeteComponent(
  {isVisible}: ConfeteComponentProps
) {
  const audioRef = useRef<HTMLAudioElement>(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // Recomeça o áudio do início
      audioRef.current.play();
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.pause();
        }
      }, 10000); // 10000 milissegundos = 10 segundos
    }
  };

  useEffect(() => {
    isVisible && playAudio()
  }, [isVisible])


  return (
    <>
    <Confetti mode="fall" particleCount={150} colors={['#ff577f', '#ff884b', '#ffd384', '#fff9b0']} />


    <audio ref={audioRef} src="/confetes.mp3" />
    </>
  );
}