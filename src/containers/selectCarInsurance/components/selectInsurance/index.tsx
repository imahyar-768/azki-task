import Image from 'next/image';

type TProps = {
  handleSelect: () => void;
};

const SelectInsurance = ({handleSelect}: TProps) => {
  return (
    <>
      <span className="mb-4 text-2xl font-medium">انتخاب بیمه</span>
      <div className="mt-6 flex gap-5">
        <div
          className="flex cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border border-gray-200 p-4"
          onClick={handleSelect}
        >
          <Image src="/icons/insurance.svg" width={35} height={35} alt="insurance" />
          <span>شخص ثالث</span>
        </div>
        <div className="flex w-28 flex-col items-center justify-center gap-3 rounded-xl border border-gray-300 bg-[#f1f1f1] p-4 opacity-40">
          <Image src="/icons/insurance.svg" width={35} height={35} alt="insurance" />
          <span>بدنه</span>
        </div>
      </div>
    </>
  );
};
export default SelectInsurance;
