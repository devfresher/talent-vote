import TopBar from "components/topbar/topBar";
import mrs from "../../assets/png/mrs.jpg";
import mr from "../../assets/png/mr.jpg";
export default function About() {
  return (
    <div>
      <TopBar />

      <div className="w-full px-2 py-5 sm:py-8 sm:px-10 md:px-20 lg:px-48 gap-4 md:gap-8 flex my-3 sm:my-6 lg:my-8  flex-col  items-center justify-center">
        <h2 className="font-semibold text-base sm:text-2xl sm:font-bold">
          About
        </h2>

        <div className="w-full flex flex-wrap items-start justify-start leading-6 sm:leading-7">
          Stagetime creates a platform for skills and talents unleash. It came
          at the right time whereby the average Nigeria youth does not only
          think of becoming a doctor or a lawyer before coming to limelight. It
          comes at the right time to unveil individual who are able to use what
          they’ve acquired, the flexibility that comes with understanding what
          you can be good at and not what anybody think you can be good at.
          <br />
          Stagetime has come to make each and every indivual in Africa stand out
          in what they can do and also serve as a platform to showcase and
          recommend the African youth to potential hirers, companies and
          business whose thirst for an individual with these kind of skill is
          unquenchable. We will be able to broaden the talent and skill pool for
          easy clients-to-expertise connection.
        </div>
      </div>

      <div className="w-full px-4 py-5 sm:py-8 sm:px-10 md:px-20 lg:px-48 bg-gray-200 bg-opacity-10 gap-4 md:gap-8 flex my-3 sm:my-6 lg:my-8  flex-col  items-center justify-center">
        <h2 className="font-semibold text-base sm:text-2xl sm:font-bold">
          Meet the team
        </h2>

        <div className="flex flex-wrap gap-6 items-center justify-center w-full">
          <TeamWidget image={mr} title={"Founder"} name={"Mr. A"} />
          <TeamWidget
            image={mrs}
            title={"Communication Officer"}
            name={"Mrs. B"}
          />
          <TeamWidget
            image={mrs}
            title={"Program Coordinator"}
            name={"Miss D"}
          />
          <TeamWidget image={mr} title={"Advisor"} name={"Prof. E"} />
        </div>
      </div>
    </div>
  );
}

export function TeamWidget({ image, name, title }) {
  return (
    <div className="w-full sm:w-[300px] h-[300px] relative rounded-md overflow-hidden">
      <img src={image} alt="" className="w-full h-full " />
      <div className="absolute gap-y-1 bottom-3 inset-x-0 flex-col flex items-start px-2 font-semibold">
        <h3 className="text-lg sm:text-xl">{name}</h3>
        <h3 className="text-base sm:text-lg">{title}</h3>
      </div>
    </div>
  );
}
