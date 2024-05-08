import pic2 from "../../assets/images/image-about-dark.jpg";
import pic3 from "../../assets/images/image-about-light.jpg";

export default function Body() {
  return (
    <main className="max-w-[1440px] grid lg:grid-cols-3">
      <img src={pic2} alt="dark-image" className="w-[500px]" />
      <div className="px-6 pt-3">
        <h2 className="text-2xl font-bold"> About our furniture</h2>
        <p className="pt-2 text-gray-400 py-4">
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </div>
      <img src={pic3} alt="dark-white" className="w-[500px]" />
    </main>
  );
}
