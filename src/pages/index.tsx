import SafeEnviroment from "ui/components/feedback/SafeEnviroment";
import PageTitle from "ui/components/data-display/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation";

export default function Home() {
  return (
    <div>
      <SafeEnviroment />
      <PageTitle
        title="Conheça os profissionais"
        subtitle="Preencha seu endereço e veja todos os profissionais da sua localidade"
      />
      <UserInformation
        name={"Sanira Tamada"}
        picture={"https://avatars.githubusercontent.com/u/24655967?v=4"}
        rating={3}
        description={"Campina Grande"}
      />
    </div>
  );
}
