import Confetti from "react-confetti-boom";

export function ConfettiComponent() {
 

  return (
    <Confetti mode="fall" particleCount={150} colors={['#ff577f', '#ff884b', '#ffd384', '#fff9b0']} />
  );
}