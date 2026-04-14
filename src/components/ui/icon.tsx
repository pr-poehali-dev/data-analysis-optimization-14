import { icons, LucideProps } from 'lucide-react';

export type IconName = keyof typeof icons;

interface IconProps extends Omit<LucideProps, 'ref'> {
  name: IconName | string;
  fallback?: IconName;
}

const Icon = ({ name, fallback = 'CircleAlert', ...props }: IconProps) => {
  const LucideIcon = icons[name as IconName] ?? icons[fallback];
  if (!LucideIcon) return null;
  return <LucideIcon {...props} />;
};

export default Icon;
