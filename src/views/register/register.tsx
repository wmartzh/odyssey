
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema, TRegisterSchema } from './schemas';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Card from '@/components/card';
import { useTranslation } from 'react-i18next';
import { Button } from '../../components/ui/button';

function Register() {
  const { t } = useTranslation();

  const form = useForm<TRegisterSchema>({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    resolver: zodResolver(registerSchema),
  });

  function onSumbit(data: TRegisterSchema) {
    console.log(data);
  }

  return (
    <div className="bg-slate-100 w-screen h-screen p-10 sm:p-0 flex justify-center items-center">
      <Card className="w-96" headerTextClassName="text-xl font-mono text-center" title={t('forms.register.title')}>
        <Form {...form}>
          <form
            className="grid grid-flow-row gap-5"
            onSubmit={form.handleSubmit(onSumbit)}
          >
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('forms.register.email')}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t('forms.register.email_placeholder')}
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('forms.register.password')}</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder={t('forms.register.password_placeholder')}
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="confirmPassword"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('forms.register.confirm_password')}</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder={t('forms.register.confirm_password_placeholder')}
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit">{t('forms.register.submit')}</Button>
            <Button variant="link" type="button">{t('forms.register.login')}</Button>
          </form>
        </Form>
      </Card>
    </div>
  );
}

export default Register;