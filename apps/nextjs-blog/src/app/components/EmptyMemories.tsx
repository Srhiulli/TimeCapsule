export function EmptyMemories() {
  return (
    <div className="flex flex-1 p-16 items-center justify-center">
      <p className="text-center leading-relaxed w-[360]">
        Você ainda não registrou nehuma lembrança, começe a{" "}
        <a href="/memories/new" className="underline hover:text-gray-50">
          criar agora
        </a>
        !
      </p>
    </div>
  );
}
