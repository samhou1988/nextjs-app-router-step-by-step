'use client';

import { Button } from '@/components/ui/button';
import LikeButton from '@/components/like-button';
import {ModeToggle} from '@/components/header';

export default function Page() {
  return (
    <div className="flex">
      <ModeToggle />
    </div>
  );
}
