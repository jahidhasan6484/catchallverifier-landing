"use client";
import clsx from "clsx";
import { useFormStatus } from "react-dom";

export function SubmitButton({
  label,
  disabled,
}: {
  label: string;
  disabled?: boolean;
}) {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={disabled || pending}
      type="submit"
      className={clsx(
        "rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600",
        {
          "cursor-not-allowed border-disable-primary text-disable-primary":
            disabled || pending,
        }
      )}
    >
      <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
      <span className="relative transition duration-300 group-hover:text-white ease">
        {pending ? (
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-indigo-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        ) : (
          label
        )}
      </span>
    </button>
  );
}
