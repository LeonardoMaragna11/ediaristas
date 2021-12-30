import type { NextPage } from 'next';
import SafeEveronment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment';
import PageTitle from 'ui/components/data display/PageTitle/PageTitle.style';
const Home: NextPage = () => {
  return (
    <div >
      <SafeEveronment/>
      <PageTitle 
        title={'Conheça nossos Profissionais'}
        subtitle ={'Preencha  seu endereço e veja todos os profissionais da sua localidade'}/>
    </div>
  )
}

export default Home
