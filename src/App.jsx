import styled from '@emotion/styled';
import { AuthenticateApp } from './Authentication/AuthenticateApp';
import { UnAuthenticateApp } from './Authentication/UnAuthenticateApp';
import { useAuth } from './context/Auth-Context';

const WraperApp = styled.main`
  margin-top: 96px;
  margin-bottom: 96px;

  section.section {
    max-width: 1024px;
    padding-left: 16px;
    padding-right: 16px;
    margin-left: auto;
    margin-right: auto;
    height: 100%;
  }
`;

function App() {
  const { user } = useAuth();
  return (
    <WraperApp>
      <section className='section'>
        {user ? <AuthenticateApp /> : <UnAuthenticateApp />}
      </section>
    </WraperApp>
  );
}

export default App;
