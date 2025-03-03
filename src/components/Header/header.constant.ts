import AccountTree from "../../assets/svgs/account_tree.svg?react";
import Monitoring from "../../assets/svgs/monitoring.svg?react";
import GridView from "../../assets/svgs/grid_view.svg?react";
import AccountBalance from "../../assets/svgs/account_balance.svg?react";
import React from "react";

export interface MenuItem {
  label: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  path: string;
}

export const menuItems: MenuItem[] = [
  { label: "Dashboard", icon: GridView, path: "/" },
  { label: "Approval Workflow", icon: AccountTree, path: "/approval-workflow" },
  { label: "Budget Room", icon: AccountBalance, path: "/budget-room" },
  { label: "Analytics", icon: Monitoring, path: "/analytics" },
];
