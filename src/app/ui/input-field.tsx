import { ReactElement } from "react";
import clsx from "clsx";

export function InputField({
  name,
  type,
  label,
  icon,
  placeholder,
  required,
  errors,
  className,
  defaultValue,
}: {
  name: string;
  type: string;
  label?: string;
  icon?: ReactElement;
  placeholder?: string;
  required?: boolean;
  errors?: string[];
  className?: string;
  defaultValue?: string;
}) {
  return (
    <>
      {label && (
        <label htmlFor={name} className="block mb-2 text-sm text-gray-900">
          {label}
          {required && "*"}
        </label>
      )}
      <div className={"relative " + className}>
        {icon && (
          <div className="absolute flex items-center  inset-y-0 ps-3.5">
            {icon}
          </div>
        )}

        <input
          type={type}
          id={name}
          name={name}
          className={clsx(
            "form-input bg-[#F9F9F9] rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-primary  p-3 text-gray-900 text-sm w-full",
            icon && "ps-10"
          )}
          placeholder={placeholder}
          required={required}
          aria-describedby={`${name}-error`}
          defaultValue={defaultValue}
        />
      </div>
      <div
        id={`${name}-error`}
        aria-live="polite"
        aria-atomic="true"
        className="mb-6"
      >
        {errors &&
          errors.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
      </div>
    </>
  );
}
