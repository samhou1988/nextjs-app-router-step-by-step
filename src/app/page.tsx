import { Button } from '@/components/ui/button';
import LikeButton from '@/components/like-button';

export default function Page() {
  return (
    <div className="flex">
      <Button>Click me</Button>
      <h1 className="text-4xl">Hello, Next.js!</h1>
      <LikeButton />
    </div>
  );
}
