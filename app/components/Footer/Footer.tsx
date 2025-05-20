export default function Footer({ title }: { title: string }) {
  return (
    <>
      <footer className="bg-gray-800 text-white p-4">
        <p className="text-center py-2">{title}</p>
      </footer>
    </>
  );
}
