import Head from 'next/head';
import SafeEnviroment from 'ui/components/feedback/SafeEnviroment';
import PageTitle from 'ui/components/data-display/PageTitle';

export default function Home() {
  return (
    <div>
      <SafeEnviroment/> 
      <PageTitle 
        title="Conheça os profissionais"
        subtitle="Preencha seu endereço e veja todos os profissionais da sua localidade"/>
  

    </div>
  )
}
