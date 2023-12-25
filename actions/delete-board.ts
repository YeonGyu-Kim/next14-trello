'use server';

import { db } from '@/lib/db';
import { revalidatePath } from 'next/cache';

export default async function deleteBoard(id: string) {
  await db.board.delete({
    where: {
      id,
    },
  });
  revalidatePath('/organization/org_2Zd2qq0W5YLaeVozMECnw4KAW6R');
}
