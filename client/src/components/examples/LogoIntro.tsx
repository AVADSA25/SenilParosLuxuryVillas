import LogoIntro from '../LogoIntro';

export default function LogoIntroExample() {
  return <LogoIntro onComplete={() => console.log('Intro complete')} />;
}
