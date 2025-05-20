export default function Header({ title }: { title: string }) {
  return (
    <>
      <header className="bg-white shadow px-4 py-2">
        <div className="flex items-center justify-center">
          <h1 className="text-2xl font-bold">{title}</h1>
        </div>
      </header>
    </>
  );
}
