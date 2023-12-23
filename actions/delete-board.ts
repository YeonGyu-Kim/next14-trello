'use server';

import { db } from '@/lib/db';

export default async function deleteBoard(id: string) {
  await db.board.delete({
    where: {
      id,
    },
  });
  return;
}
