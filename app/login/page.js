import LoginClient from './LoginClient';

export const metadata = {
  title: 'Login | MockYourTest',
  description: 'Sign in to start mock exams and track your attempts.'
};

export default function LoginPage() {
  const missingKeys = ['GOOGLE_CLIENT_ID', 'GOOGLE_CLIENT_SECRET', 'NEXTAUTH_SECRET'].filter((key) => !process.env[key]);
  const googleConfigured = missingKeys.length === 0;

  return <LoginClient googleConfigured={googleConfigured} missingKeys={missingKeys} />;
}
