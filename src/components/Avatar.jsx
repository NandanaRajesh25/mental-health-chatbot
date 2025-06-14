import { Player } from "@lottiefiles/react-lottie-player";
import idleAnim from "../assets/avatar_idle.json";
import happyAnim from "../assets/avatar_happy.json";

export default function Avatar({ mood }) {
  const avatarSrc = mood === "happy" ? happyAnim : idleAnim;
  return (
    <Player autoplay loop src={avatarSrc} style={{ height: "300px", width: "300px" }} />
  );
}
