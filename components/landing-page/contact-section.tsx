
'use client';

import { useActionState, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useToast } from '@/hooks/use-toast';
import { submitContactForm, FormState } from '@/lib/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Send, Phone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const FormSchema = z.object({
  name: z.string().min(2, "O nome deve ter pelo menos 2 caracteres."),
  email: z.string().email("Por favor, insira um e-mail válido."),
  phone: z.string().min(10, "Por favor, insira um telefone válido com DDD."),
  date: z.string(),
  time: z.string(),
});

type FormData = z.infer<typeof FormSchema>;

function ContactForm() {
  const { toast } = useToast();
  
  const [state, formAction] = useActionState<FormState, FormData>(
    submitContactForm,
    { message: '' }
  );

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset, setValue } = useForm<FormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
    }
  });

  useEffect(() => {
    if (state.message) {
      if (state.errors) {
        toast({
          title: 'Erro no Formulário',
          description: state.message,
          variant: 'destructive',
        });
      } else {
        toast({
          title: 'Sucesso!',
          description: state.message,
        });
        reset();
      }
    }
  }, [state, toast, reset]);
  
  const wrappedAction = (data: FormData) => {
    const now = new Date();
    data.date = now.toLocaleDateString('pt-BR');
    data.time = now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    formAction(data);
  };

  return (
    <form onSubmit={handleSubmit(wrappedAction)} className="space-y-4">
      <input type="hidden" {...register('date')} />
      <input type="hidden" {...register('time')} />
      <div className="space-y-1">
        <Label htmlFor="name">Nome Completo</Label>
        <Input id="name" placeholder="Seu nome" {...register('name')} />
        {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
      </div>
      <div className="space-y-1">
        <Label htmlFor="email">E-mail</Label>
        <Input id="email" type="email" placeholder="seu@email.com" {...register('email')} />
        {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
      </div>
      <div className="space-y-1">
        <Label htmlFor="phone">Telefone com DDD</Label>
        <Input id="phone" type="tel" placeholder="(21) 99999-9999" {...register('phone')} />
        {errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}
      </div>
      <Button 
        type="submit" 
        disabled={isSubmitting} 
        className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-full py-5 shadow-lg transition-transform hover:scale-105"
      >
        {isSubmitting ? 'Enviando...' : (
          <>
            <Send className="mr-2 h-5 w-5" />
            Enviar e receber proposta
          </>
        )}
      </Button>
    </form>
  );
}

export default function ContactSection() {
    return (
        <section id="simulacao" className="py-12 md:py-16 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-md mx-auto animate-fade-in-up">
                    <Card className="rounded-2xl shadow-2xl border-0 p-4 sm:p-6 transition-transform duration-300 hover:scale-[1.02] hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)]">
                        <CardHeader className="text-center p-4">
                            <CardTitle className="text-2xl md:text-3xl font-headline text-primary">
                                Peça sua simulação gratuita
                            </CardTitle>
                            <CardDescription className="text-base text-primary/70 pt-1">
                                Preencha e receba uma cotação no seu WhatsApp.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="p-4">
                            <ContactForm />
                            <div className="mt-4 text-center">
                                <div className="flex items-center my-3">
                                    <div className="flex-grow border-t border-gray-300"></div>
                                    <span className="flex-shrink mx-3 text-primary/70 text-sm">OU</span>
                                    <div className="flex-grow border-t border-gray-300"></div>
                                </div>
                                <p className="text-primary/80 mb-3 text-sm">Se preferir, me chame no WhatsApp</p>
                                <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-full py-5 shadow-lg transition-transform hover:scale-105">
                                    <a href="https://wa.me/5521994878791" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                                        Chamar no WhatsApp
                                    </a>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
