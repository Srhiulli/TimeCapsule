
import { NewMemoryform } from "@/app/components/NewMemoryForm";
import { ChevronLeft } from "lucide-react";

export default function NewMemory() {
    return (
        <div className="flex flex-1 flex-col p-16 gap-4">
            <a href="/" className="flex flex-items-center flex-row gap-1 text-sm text-gray-200 hover:text-gray-100">
                <ChevronLeft className="h-4 w-4 " />Voltar à timeline
            </a>
            <NewMemoryform />
        </div>
    )
} 