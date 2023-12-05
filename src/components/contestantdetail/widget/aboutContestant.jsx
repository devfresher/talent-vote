export function AboutContestant({data}) {
  return (
    <div className="flex-col  w-full px-2 py-5 sm:py-8 sm:px-10 md:px-20 gap-4 md:gap-8 my-3 sm:my-6 lg:my-8 flex">
      <h2 className="py-2 px-1 w-fit border-[#3DDEED] text-[#3DDEED] border-b-2 font-semibold">About</h2>
<div className="flex flex-col gap-2 w-full items-start justify-start">
  <div className="flex gap-2 items-center justify-start">
    <p className="font-medium">Real Name:</p>
    <p>{`${data.firstName ?? ""} ${data?.lastName ?? ""}`}</p>
  </div>
  <div className="flex gap-2 items-center justify-start">
    <p className="font-medium">Stage Name</p>
    <p>{`${data.stageName ?? ""}`}</p>
  </div>
  <div className="flex gap-2 items-center justify-start">
    <p className="font-medium">Email:</p>
    <p>{`${data.email ?? ""}`}</p>
  </div>
  <div className="flex gap-2 items-center justify-start">
    <p className="font-medium">Portflio:</p>
   <a className="hover:underline" href={data.portfolio} target="_blank">{data.portfolio}</a>
  </div>

</div>
    </div>
  );
}
