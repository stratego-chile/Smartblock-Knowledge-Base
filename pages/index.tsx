import { FC } from 'react';
import PageWrapper from '@components/page-wrapper';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import BasePathLink from '@components/base-path-link';

const Home: FC<Record<string, never>> = () => {
  return (
    <PageWrapper pageTitle='Home'>
      <Container className='h-100'>
        <Row className='h-100 align-content-center justify-content-center text-center'>
          <Col sm={12}>
            <h1 className='fw-bold'>Smartblock Knowledge Base</h1>
            <span>Welcome to the Smartblock learning center and reference source</span>
          </Col>
          <Col sm={12} className='my-4' />
          <Col sm={12} md={9} lg={7}>
            <Form>
              <FloatingLabel
                controlId='home-search'
                label='Start searching' >
                <Form.Control
                  size='sm'
                  type='text'
                  placeholder='Start searching'
                  disabled />
              </FloatingLabel>
              <Row className='my-4' />
              <Row className='justify-content-center my-3'>
                <Col sm={12} md={9} lg={7} className='d-grid'>
                  <Button
                    variant='primary'
                    type='submit'
                    className='pill'
                    size='lg'
                    disabled >
                    Search
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <span>Or</span>
                </Col>
              </Row>
              <Row className='justify-content-center my-3'>
                <Col sm={12} md={9} lg={7} className='d-grid'>
                  <BasePathLink href='/explore' passHref>
                    <Button
                      variant='outline-primary'
                      type='button'
                      className='pill'
                      size='lg'>
                      Explore
                    </Button>
                  </BasePathLink>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </PageWrapper>
  );
};

export default Home;
