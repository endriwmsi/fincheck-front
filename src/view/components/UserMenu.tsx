import { ExitIcon } from "@radix-ui/react-icons";
import { DropdownMenu } from "./DropdownMenu";
import { useAuth } from "../../app/hooks/useAuth";

export function UserMenu() {
  const { signOut, user } = useAuth();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <div className="bg-teal-50 h-12 w-12 rounded-full flex items-center justify-center border border-teal-100">
          <span className="text-sm tracking-[-0.5px] text-teal-900 font-medium">
            {user?.name.slice(0, 2).toUpperCase()}
          </span>
        </div>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content className="w-32">
        <DropdownMenu.Item
          className="flex items-center justify-between"
          onSelect={signOut}
        >
          Sair
          <ExitIcon className="w-4 h-4" />
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
