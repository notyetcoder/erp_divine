import {
  Boxes, Building2, Factory, FolderKanban, Globe, Handshake, Landmark, LifeBuoy, Receipt,
  ShieldCheck, ShoppingCart, Store, UserCog, type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  accounting: Landmark,
  selling: ShoppingCart,
  buying: Receipt,
  stock: Boxes,
  manufacturing: Factory,
  crm: Handshake,
  hr: UserCog,
  projects: FolderKanban,
  support: LifeBuoy,
  assets: Building2,
  quality: ShieldCheck,
  pos: Store,
  website: Globe,
};

export default function ModuleIcon({ name, size = 22 }: { name: string; size?: number }) {
  const Icon = icons[name] ?? Boxes;
  return <Icon size={size} aria-hidden="true" />;
}
