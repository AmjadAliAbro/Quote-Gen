import Quote from "@/components/Quote";

export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "#0093E9",
        backgroundImage: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
      }}
      className="w-screen h-screen flex items-center justify-center"
    >
      <Quote />
    </div>
  );
}
