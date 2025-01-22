import {
  BackgroundImage,
  ContainerLogin,
  ContainerLoginScreen,
  LimitedContainer,
  LogoImage,
} from '../styles/loginScreen.styles';

import Input from '../../../shared/inputs/input/input';

const LoginScreen = () => {
  return (
    <ContainerLoginScreen>
      <BackgroundImage src="./background.png" alt="background" />
      <ContainerLogin>
        <LimitedContainer>
          <LogoImage src="./logo.png" alt="logo" />
          <Input title="USUÁRIO"/>
          <Input title="SENHA"/>
        </LimitedContainer>
      </ContainerLogin>
    </ContainerLoginScreen>
  );
};

export default LoginScreen;
