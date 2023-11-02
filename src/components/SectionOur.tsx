import Image from "next/image";
import coffee from "public/assets/coffee.jpg";

const SectionOur = () => {
  return (
    <div className="flex md:my-12 gap-4 flex-col md:flex-row">
      <div className="flex-1 h-[500px]">
        <Image
          src={coffee}
          width={600}
          height={600}
          alt="coffee"
          className="w-full h-full"
        />
      </div>
      <div className="flex-1 p-10 font-semibold text-justify">
        <h2 className="text-2xl text-warning-600 text-center mb-8">
          COFFEE TIME
        </h2>
        <p className="">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
          explicabo velit impedit nam cupiditate sed. Recusandae nam quisquam
          alias saepe velit sed dolor deserunt reiciendis amet! Quia sunt ut
          architecto obcaecati harum facere excepturi adipisci corrupti at
          laborum, ea dolores maiores quae. Est, beatae! Voluptatibus, cum!
        </p>
        <br />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
          dolorem harum quas veritatis dicta saepe necessitatibus at
          voluptatibus fugiat error, mollitia ratione sapiente aspernatur libero
        </p>
      </div>
    </div>
  );
};

export default SectionOur;
