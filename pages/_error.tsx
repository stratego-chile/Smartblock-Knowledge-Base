import PageWrapper from '@components/page-wrapper';
import { NextPage } from 'next';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

type CustomErrorProps = {
  statusCode?: number;
}

const CustomErrorPage: NextPage<CustomErrorProps> = ({ statusCode }) => {
  return (
    <PageWrapper pageTitle='Unexpected Error'>
      <Container className='h-100'>
        <Row className='h-100 align-content-center'>
          <Col className='text-center'>
            <h1>{statusCode}</h1>
            <h2>Oops, we are sorry to say you an unexpected error ocurred {statusCode ? 'in our side' : null}</h2>
            <h5>Please do not worry to contact us for any question</h5>
          </Col>
        </Row>
      </Container>
    </PageWrapper>
  )
}

CustomErrorPage.getInitialProps = async ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
}

export default CustomErrorPage;
