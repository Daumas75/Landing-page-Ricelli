
'use server';

import { z } from 'zod';

const FormSchema = z.object({
  name: z.string().min(2, { message: "O nome deve ter pelo menos 2 caracteres." }),
  phone: z.string().min(10, { message: "Por favor, insira um telefone válido com DDD." }),
  email: z.string().email({ message: "Por favor, insira um e-mail válido." }),
  date: z.string(),
  time: z.string(),
});

export type FormState = {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    phone?: string[];
    date?: string[];
    time?: string[];
  };
};

export async function submitContactForm(
  prevState: FormState,
  data: z.infer<typeof FormSchema>
): Promise<FormState> {
  const validatedFields = FormSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Erro de validação. Por favor, corrija os campos.',
    };
  }
  
  const { name, email, phone, date, time } = validatedFields.data;
  const sheetMonkeyUrl = 'https://api.sheetmonkey.io/form/trm14nqzGdpvB3WYDKhjSk';

  try {
    const response = await fetch(sheetMonkeyUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            "Nome": name,
            "Email": email,
            "Telefone": phone,
            "Data": date,
            "Hora": time
        }),
    });

    if (!response.ok) {
        console.error('Sheet Monkey API Error:', await response.text());
        throw new Error('Falha ao enviar para o Sheet Monkey');
    }

    return { message: 'Obrigado! Sua simulação foi enviada com sucesso. Entraremos em contato em breve.' };
  } catch (e) {
    console.error(e);
    if (e instanceof Error) {
        return { message: `Ocorreu um erro ao enviar sua simulação: ${e.message}` };
    }
    return { message: 'Ocorreu um erro ao enviar sua simulação. Tente novamente mais tarde.' };
  }
}
