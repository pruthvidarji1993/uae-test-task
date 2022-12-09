import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Col, Container, Row } from 'reactstrap';
import { handleLogout } from '../../redux/actions/auth/loginActions';
import LanguagePicker from './LanguagePicker';
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  /**
   * @name logout
   * @description this funcion wwill call handleLogout action
   */
  const logout = () => {
    dispatch(handleLogout(navigate))
  }
  return (
    <>
      <header className='shadow-div'>
        <Container fluid>
          <Row>
            <Col md={4}>
              <h4 className='mb-0'>Header</h4>
            </Col>
            <Col md={8} className='d-flex'>
              <ul className='header-ul'>
                <LanguagePicker />
              </ul>
              <Button
                type='button'
                className='ml-1'
                color='primary'
                onClick={logout}
              >
                Logout
              </Button>
            </Col>
          </Row>
        </Container>
      </header>
    </>
  );
};

export default Header;
