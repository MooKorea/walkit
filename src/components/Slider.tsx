"use client";
import { Range, getTrackBackground } from "react-range";

interface Slider {
  values: number[];
  setValues: React.Dispatch<React.SetStateAction<number[]>>;
  min: number;
  max: number;
  step?: number;
}

export default function Slider({ values, setValues, min, max, step = 0.1 }: Slider) {
  return (
    <div
      className={
        "w-[327px] flex justify-center rounded-[20px] " +
        (values.length > 1
          ? "bg-inputBackground"
          : "bg-[linear-gradient(to_right,var(--inputForeground),var(--inputBackground))]")
      }
    >
      <Range
        step={step}
        min={min}
        max={max}
        values={values}
        onChange={(values) => setValues(values)}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              background: getTrackBackground({
                min: min,
                max: max,
                values: values,
                colors:
                  values.length > 1
                    ? ["#FFECC5", "#FAB577", "#FFECC5"]
                    : ["#FAB577", "#FFECC5"],
              }),
            }}
            className="w-[303px] h-[24px]"
          >
            {children}
            <div className="w-[327px] h-full absolute translate-x-1/2 right-1/2 rounded-full z-[-1] shadow-inset"></div>
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            key={props.key}
            style={{
              ...props.style,
            }}
            className="flex items-center justify-center bottom-[2px] w-6 h-6 border-2 border-[#563400] shadow-[0_2px_0_#563400] rounded-full bg-secondary focus:outline-none"
          >
            <div className="rounded-full w-3 h-3 bg-[#B08D4C]"></div>
          </div>
        )}
      />
    </div>
  );
}
