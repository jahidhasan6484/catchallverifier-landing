export function SuccessMessage({ error }: { error?: string }) {
  return (
    <>
      {error && (
        <p
          className="mt-2 text-sm text-green-500 mb-6 flex justify-center"
          key={error}
        >
          {error}
        </p>
      )}
    </>
  );
}
