import React, { useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";

interface Props
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  isTextArea?: boolean;
}

export default function TextField({ isTextArea = false, ...props }: Props) {
  const [isFocused, setIsFocused] = useState(false);
  const ref = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  useOnClickOutside(ref, () => setIsFocused(false));

  return (
    <div>
      {isTextArea ? (
        <textarea
          ref={ref as React.Ref<HTMLTextAreaElement>}
          className="w-full h-[107px] bg-transparent pb-4 pl-6 text-base leading-6 placeholder:font-medium placeholder:text-base placeholder:leading-6 placeholder:text-primary-grey placeholder:tracking-[-0.222222px] placeholder:uppercase focus:outline-none resize-none"
          onFocus={() => setIsFocused(true)}
          {...props}
        />
      ) : (
        <input
          ref={ref as React.Ref<HTMLInputElement>}
          className="w-full bg-transparent pb-4 pl-6 text-base leading-6 placeholder:font-medium placeholder:text-base placeholder:leading-6 placeholder:text-primary-grey placeholder:tracking-[-0.222222px] placeholder:uppercase focus:outline-none"
          onFocus={() => setIsFocused(true)}
          {...props}
        />
      )}

      <div
        className="w-full h-[1px] bg-primary-grey"
        style={{
          backgroundColor: isFocused ? "#4EE1A0" : "#D9D9D9",
        }}
      ></div>
    </div>
  );
}
