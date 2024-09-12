import { YouTubeEmbed } from "@next/third-parties/google";
import Image from "next/image";
import rick from "../../videos/rick.mp4";
import NextVideo from "next-video";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 w-screen items-center justify-center h-screen p-6">
      <p className="font-bold text-xl">Check this out</p>
      <p className="text-gray-300">Confirm Win</p>
      <video
        controls
        preload="auto"
        autoPlay
        className="w-full h-auto max-w-[720px]"
      >
        <source src="/rick.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
