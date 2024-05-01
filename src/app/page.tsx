'use client';

import { Button } from '@/components/ui/button';
import LikeButton from '@/components/like-button';
import Header from '@/components/header';

export default function Page() {
  return (
    <div className="flex">
      <Header />
      <Button>Click me</Button>
      <h1 className="text-4xl">Hello, Next.js!</h1>
      <LikeButton />
    </div>
  );
}
