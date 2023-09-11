import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import {
  BarChart, ChatText, JournalCheck, List,
} from 'react-bootstrap-icons';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import style from '../styles/navbar.module.css';
import duelsLogo from '../public/images/duels-logo.png';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <Container fluid style={{ height: '10vh' }} className="mx-0 px-0">
      <Offcanvas show={open} onHide={() => { setOpen(false); }} placement="end" style={{ backgroundColor: '#000717' }}>
        <Offcanvas.Header className={style['offcanvas-header']} closeButton closeVariant="white">
          <Offcanvas.Title>
            <Image
              src={duelsLogo}
              alt="Gradient seperator"
              fill={false}
              className="w-100"
            />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup>
            <ListGroup.Item className={style['offcanvas-nav-link']}>
              <Link href="/">Leaderboard</Link>
            </ListGroup.Item>
            <ListGroup.Item className={style['offcanvas-nav-link']}>
              <Link href="/">Tutorial</Link>
            </ListGroup.Item>
            <ListGroup.Item className={style['offcanvas-nav-link']}>
              <Link href="/">FAQ</Link>
            </ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>

      <Row className="pt-3 d-lg-none">
        <Col lg={12} className="text-end">
          <List className={`${style.hamburger}`} size={36} onClick={() => { setOpen(true); }} />
        </Col>
      </Row>

      <Row className="fluid d-none d-lg-flex pt-4">
        <Col lg={{ offset: 1, span: 11 }}>
          <ListGroup horizontal>
            <ListGroup.Item className={`${style['nav-item']}`}>
              <Link href="/">
                <BarChart style={{ margin: '-2px 10px 3px 0px' }} />
                Leaderboard
              </Link>
            </ListGroup.Item>
            <ListGroup.Item className={`${style['nav-item']}`}>
              <Link href="/">
                <JournalCheck style={{ margin: '-2px 10px 3px 0px' }} />
                Tutorial
              </Link>
            </ListGroup.Item>
            <ListGroup.Item className={`${style['nav-item']}`} style={{ marginTop: '-0.5px' }}>
              <Link href="/">
                <ChatText style={{ margin: '-2px 10px 3px 0px' }} />
                FAQ
              </Link>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default Navbar;
