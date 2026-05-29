import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";
import { UserInfo } from "@/types/user.types";
import { ChevronUp, Key, LogOut, User } from "lucide-react";
import Link from "next/link";

interface UserDropdownProps {
  userInfo: UserInfo;
}

const UserDropdown = ({ userInfo }: UserDropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex w-full items-center gap-3 rounded-lg px-2 py-2 text-left transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none">
          {/* Avatar Initial */}
          <div className="h-8 w-8 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-sm font-semibold text-primary">
              {userInfo.name.charAt(0).toUpperCase()}
            </span>
          </div>

          {/* Name & Role */}
          <div className="flex-1 overflow-hidden">
            <p className="text-sm font-medium truncate">{userInfo.name}</p>
            <p className="text-xs text-muted-foreground capitalize truncate">
              {userInfo.role.toLowerCase().replace("_", " ")}
            </p>
          </div>

          {/* Chevron indicator */}
          <ChevronUp className="h-4 w-4 shrink-0 text-muted-foreground" />
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent side="top" align="start" className="w-56 mb-1">
        <DropdownMenuGroup>
          <DropdownMenuLabel>
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium">{userInfo.name}</p>
              <p className="text-xs text-muted-foreground">{userInfo.email}</p>
              <p className="text-xs text-primary capitalize">
                {userInfo.role.toLowerCase().replace("_", " ")}
              </p>
            </div>
          </DropdownMenuLabel>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          <Link
            href={"/my-profile"}
            className="flex items-center cursor-pointer"
          >
            <User className="mr-2 h-4 w-4" />
            My Profile
          </Link>
        </DropdownMenuItem>


        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => {}}
          className="cursor-pointer text-red-600"
        >
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
