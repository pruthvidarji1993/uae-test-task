import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Col, Container, Row } from 'reactstrap';
import LanguagePicker from './LanguagePicker';

import { handleLogout } from '../../redux/actions/auth/loginActions';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  /**
   * @name logout
   * @description this funcion wwill call handleLogout action
   */
  const logout = () => {
    dispatch(handleLogout(navigate));
  };
  return (
    <>
      <header>
        <Container>
          <Row className='inner-header'>
            <Col xs={4}>
              <h4 className='mb-0'>{t('header.appTitle')}</h4>
            </Col>
            <Col xs={8} className='d-flex'>
              <ul className='header-ul'>
                <LanguagePicker />
                <li>
                  <Button
                    type='button'
                    color='primary'
                    outline
                    className='small-btn'
                    onClick={logout}
                  >
                    {t('header.buttonLogout')}
                  </Button>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </header>
    </>
  );
};

export default Header;
