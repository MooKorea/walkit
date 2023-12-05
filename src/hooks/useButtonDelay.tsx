import { useRouter } from "next/navigation";

//adds small delay on clicks for a nicer effect
export default function useButtonDelay(href: string) {
  const router = useRouter();
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setTimeout(() => {
      router.push(href, {scroll: false});
    }, 125);
  };

  return handleClick;
}
