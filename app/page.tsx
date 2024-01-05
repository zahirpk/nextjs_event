import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1 className="flex justify-center text-4xl bg-red-700 text-white py-6">
        Working with HTML Events Using TypeScript
      </h1>
      <p className="flex justify-center text-2xl py-10">
        {" "}
        Explore these Url to deep dive HTML Event using TypeScript
      </p>
      <div className="flex justify-center text-2xl">
        <ul className="list-disc space-y-2">
          <li className="text-green-600">"/counterApp"</li>
          <li className="text-blue-600">"/service"</li>
          <li className="text-purple-600">"/info"</li>
          <li className="text-orange-600">"/contact"</li>
        </ul>
      </div>
    </main>
  );
}
