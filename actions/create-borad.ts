'use server';

import { db } from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

export type State = {
  errors?: {
    title?: string[];
  };
  message?: string | null;
};

const CreateBoard = z.object({
  title: z.string().min(3, {
    message: '최소 3글자 입니다.',
  }),
});

export async function createBorad(prevState: State, formData: FormData) {
  const validateFields = CreateBoard.safeParse({
    title: formData.get('title'),
  });

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message: 'Missing fields.',
    };
  }

  const { title } = validateFields.data;

  try {
    await db.board.create({
      data: {
        title,
      },
    });
  } catch (e) {
    return {
      message: 'Database Error',
    };
  }
  revalidatePath('/organization/org_2Zd2qq0W5YLaeVozMECnw4KAW6R');
  redirect('/organization/org_2Zd2qq0W5YLaeVozMECnw4KAW6R');
}
