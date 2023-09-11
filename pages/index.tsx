/* eslint-disable react/jsx-no-target-blank */
import type { NextPage } from 'next';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import {
  motion, useTime, useTransform,
} from 'framer-motion';
import {
  Discord,
  Instagram,
  Twitter,
  ArrowUpRightCircle,
} from 'react-bootstrap-icons';
import Image from 'next/image';
import CountUp from 'react-countup';
import style from '../styles/index.module.css';
import Navbar from '../components/navbar';
import duelsLogo from '../public/images/duels-logo.png';
import divider from '../public/images/divider.png';
import wireframeWeb from '../public/images/wireframe-web.png';
import wireframeMobile from '../public/images/wireframe-mobile.png';
import line from '../public/images/line-1.png';
import certik from '../public/images/certik.png';
import galaxyBackground from '../public/images/galaxy-bg.png';

const Home: NextPage = () => {
  const time = useTime();

  const rotate1 = useTransform(time, [0, 18000], [-80, 360], { clamp: false });
  const reverse1 = useTransform(time, [0, 18000], [440, 0], { clamp: false });

  const rotate2 = useTransform(time, [0, 20000], [75, 360], { clamp: false });
  const reverse2 = useTransform(time, [0, 20000], [285, 0], { clamp: false });

  const rotate3 = useTransform(time, [0, 22000], [0, 360], { clamp: false });
  const reverse3 = useTransform(time, [0, 22000], [360, 0], { clamp: false });

  return (
    <>
      <div style={{ backgroundColor: '#000717' }}>
        <Container
          fluid
          className={`${style['section-container']} ${style['hero-section']}`}
        >
          <Image
            src={galaxyBackground}
            alt="Background stars"
            fill={false}
            className={style['orbit-image']}
          />

          <Navbar />

          <Row className="d-flex align-items-center" style={{ minHeight: '90vh', position: 'relative' }}>
            <Col lg={{ offset: 1, span: 5 }} className="pb-2 px-4 px-lg-3">
              <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 150 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                style={{ zIndex: 1 }}
              >
                <p
                  style={{
                    color: 'white',
                    fontSize: '45px',
                    fontFamily: 'Space Mono !important',
                    letterSpacing: '-1px',
                  }}
                  className="mb-4"
                >
                  The Decentralized Betting Platform Where Every Second Counts
                </p>
              </motion.div>

              <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 150 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                style={{ zIndex: 1 }}
              >
                <p style={{ color: 'white', fontSize: '28px' }} className="mb-4">
                  {`
              BTCDuels is your destination for decentralized
              crypto betting that's actually fun. Predict real-time price changes to win
              real-time rewards.
              `}
                </p>
              </motion.div>

              <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 150 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
                style={{ zIndex: 1 }}
              >
                <p className={`${style['get-started-button']} d-inline-block mt-3`}>
                  <a href="https://google.com">
                    Play Now To Earn Crypto
                    <ArrowUpRightCircle size={28} style={{ margin: '-2px 0px 2px 8px' }} />
                  </a>
                </p>
              </motion.div>
            </Col>

            <Col lg={6} className="d-none d-lg-flex justify-content-center align-items-center pb-4 mb-5">
              <div className="w-100" style={{ position: 'relative' }}>
                <motion.img
                  src="/images/yellow-glow.png"
                  alt="BTCDuels logo"
                  viewport={{ once: true }}
                  initial={{ opacity: 0, scale: 0.7, y: 80 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  style={{ zIndex: 1, width: '100%' }}
                  className={style['orbit-image']}
                />

                <motion.img
                  src="/images/duels-logo.png"
                  alt="BTCDuels logo"
                  className={style['orbit-image']}
                  viewport={{ once: true }}
                  initial={{ opacity: 0, scale: 2.4 }}
                  whileInView={{ opacity: 1, scale: 1.2 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  style={{ zIndex: 1 }}
                />

                <motion.img
                  src="/images/orbit.svg"
                  alt="Orbit vector"
                  className={style['orbit-image']}
                  viewport={{ once: true }}
                  initial={{ opacity: 0, scale: 0.2 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                  style={{ zIndex: 1 }}
                />

                <motion.div className={style['orbit-image']} style={{ width: '272px', rotate: rotate1 }}>
                  <motion.img
                    src="/images/wbtc.svg"
                    alt="BTC Logo"
                    viewport={{ once: true }}
                    initial={{ opacity: 0, scale: 0.2 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 1.1 }}
                    style={{
                      zIndex: 1, width: '55px', height: '55px', rotate: reverse1, marginLeft: '-20px',
                    }}
                  />
                </motion.div>

                <motion.img
                  src="/images/orbit.svg"
                  alt="Orbit vector"
                  className={style['orbit-image']}
                  viewport={{ once: true }}
                  initial={{ opacity: 0, scale: 0.2 }}
                  whileInView={{ opacity: 1, scale: 1.6 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  style={{ zIndex: 1 }}
                />

                <motion.div className={style['orbit-image']} style={{ width: '435px', rotate: rotate2 }}>
                  <motion.img
                    src="/images/eth.svg"
                    alt="ETH logo"
                    viewport={{ once: true }}
                    initial={{ opacity: 0, scale: 0.2 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 1.3 }}
                    style={{
                      zIndex: 1, width: '55px', height: '55px', rotate: reverse2, marginLeft: '-20px',
                    }}
                  />
                </motion.div>

                <motion.img
                  src="/images/orbit.svg"
                  alt="Orbit vector"
                  className={style['orbit-image']}
                  viewport={{ once: true }}
                  initial={{ opacity: 0, scale: 0.2 }}
                  whileInView={{ opacity: 1, scale: 2.2 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  style={{ zIndex: 1 }}
                />

                <motion.div
                  className={style['orbit-image']}
                  style={{ width: '598px', rotate: rotate3 }}
                  initial={{ rotate: 75 }}
                >
                  <motion.img
                    src="/images/matic.svg"
                    alt="Matic logo"
                    viewport={{ once: true }}
                    initial={{ opacity: 0, scale: 0.2 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 1.5 }}
                    style={{
                      zIndex: 1, width: '55px', height: '55px', rotate: reverse3, marginLeft: '-20px',
                    }}
                  />
                </motion.div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Container
        id="iterati"
        fluid
        className={`${style['section-container']} pb-5 p-relative text-center`}
        style={{ position: 'relative' }}
      >
        {/* Background mesh and header */}
        <Row className="d-flex align-items-center mb-2 mb-lg-5" style={{ position: 'relative' }}>
          <Col lg={12} className="p-relative">
            <motion.div
              viewport={{ once: true, amount: 0.1 }}
              initial={{
                opacity: 0, filter: 'blur(20px)', scale: 2,
              }}
              whileInView={{
                opacity: 1, filter: 'blur(0px)', scale: 1,
              }}
              transition={{ duration: 0.6 }}
              style={{ zIndex: 1 }}
            >
              <Image
                src={divider}
                alt="divider graphic"
                fill={false}
                className="d-none d-lg-block"
                style={{
                  width: '100vw', minWidth: '500px',
                }}
              />
            </motion.div>
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              style={{ zIndex: 1 }}
            >
              <p
                className={`${style['hero-text']} text-center pt-5 pt-lg-0`}
                style={{
                  color: '#FFFFFF',
                  fontSize: '44px',
                  fontFamily: 'Space Mono !important',
                  letterSpacing: '-1px',
                }}
              >
                How It Works
              </p>
            </motion.div>
          </Col>
        </Row>

        <Container className="px-0">
          <Row className="py-4 my-4 px-2" style={{ position: 'relative' }}>
            {/* Central divider */}
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, scale: 0.3 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 1.1 }}
              className={style.seperator}
            />
            <Col lg={{ span: 4 }} className="d-flex align-items-center justify-content-center px-4" style={{ position: 'relative' }}>
              <motion.img
                src="/images/step1.png"
                alt="Arrow icon"
                viewport={{ once: true }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.6 }}
                className={style['orbit-image']}
                style={{ height: '60px' }}
              />
            </Col>

            <Col lg={{ span: 4 }} className="d-flex align-items-center justify-content-center px-4" style={{ position: 'relative' }}>
              <motion.img
                src="/images/step2.png"
                alt="USD icon"
                viewport={{ once: true }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.8 }}
                className={style['orbit-image']}
                style={{ height: '60px' }}
              />
            </Col>

            <Col lg={{ span: 4 }} className="d-flex align-items-center justify-content-center px-4" style={{ position: 'relative' }}>
              <motion.img
                src="/images/step3.png"
                alt="Crown icon"
                viewport={{ once: true }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 1.0 }}
                className={style['orbit-image']}
                style={{ height: '60px' }}
              />
            </Col>
          </Row>

          <Row className="py-4 mt-4 mb-5 px-2" style={{ position: 'relative' }}>
            <Col lg={{ span: 4 }} className="d-flex justify-content-center px-4 mb-4 mb-lg-0">
              <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: 'backOut' }}
                style={{ position: 'relative', width: '100%', height: '100%' }}
              >
                <div className={style['feature-box-gradient']}>
                  <div
                    className={`${style['feature-box']} d-flex justify-content-center w-100`}
                    style={{ zIndex: 1 }}
                  >
                    <div className="px-3 py-5 text-start">
                      <div style={{
                        height: '90px',
                        backgroundImage: 'url(/images/step1-bg.png)',
                        backgroundPosition: 'top',
                        borderRadius: '5px',
                      }}
                      />
                      <p className="mb-3 mt-4" style={{ fontSize: '26px', fontWeight: '500' }}>
                        {'Predict Bitcoin\'s Price Direction'}
                      </p>
                      <p className="m-0" style={{ fontSize: '20px', color: '#c9c9c9' }}>
                        Will the price of Bitcoin rise or fall
                        in the next minute? Make your
                        prediction and get ready to duel!
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Col>

            <Col lg={{ span: 4 }} className="d-flex justify-content-center px-4 mb-4 mb-lg-0">
              <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8, ease: 'backOut' }}
                style={{ position: 'relative', width: '100%', height: '100%' }}
              >
                <div className={style['feature-box-gradient']}>
                  <div
                    className={`${style['feature-box']} d-flex justify-content-center w-100`}
                    style={{ zIndex: 1 }}
                  >
                    <div className="px-3 py-5 text-start">
                      <div style={{
                        height: '90px',
                        backgroundImage: 'url(/images/step2-bg.png)',
                        backgroundPosition: 'center',
                        borderRadius: '5px',
                      }}
                      />
                      <p className="mb-3 mt-4" style={{ fontSize: '26px', fontWeight: '500' }}>
                        Join the Betting Pool for Your Prediction
                      </p>
                      <p className="m-0" style={{ fontSize: '20px', color: '#c9c9c9' }}>
                        Deposit a bet
                        into the betting pool corresponding to your
                        predicted direction (price increase
                        or decrease).
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Col>

            <Col lg={{ span: 4 }} className="d-flex justify-content-center px-4">
              <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9, ease: 'backOut' }}
                style={{ position: 'relative', width: '100%', height: '100%' }}
              >
                <div className={style['feature-box-gradient']}>
                  <div
                    className={`${style['feature-box']} d-flex justify-content-center w-100`}
                    style={{ zIndex: 1 }}
                  >
                    <div className="px-3 py-5 text-start">
                      <div style={{
                        height: '90px',
                        backgroundImage: 'url(/images/step3-bg.png)',
                        backgroundPosition: 'top',
                        borderRadius: '5px',
                      }}
                      />
                      <p className="mb-3 mt-4" style={{ fontSize: '26px', fontWeight: '500' }}>
                        Collect Your Winnings Instantly
                      </p>
                      <p className="m-0" style={{ fontSize: '20px', color: '#c9c9c9' }}>
                        {`Predicted correctly?
                        You've won a payout!
                        Collect your reward instantly and get ready for the next round.`}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container className={style['section-container']} fluid style={{ minHeight: '100vh', overflow: 'visible' }}>
        <Row className="d-flex align-items-center pb-5" style={{ minHeight: '100vh', background: 'url(/images/galaxy-bg.png),radial-gradient(#1A1B6E, #000717 70%)' }}>
          <div>
            <Row className="mb-4 pb-4">
              <Col lg={12} style={{ position: 'relative' }}>
                <motion.div
                  viewport={{ once: true }}
                  initial={{ opacity: 0, scale: 0.1, filter: 'blur(20px)' }}
                  whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  transition={{ duration: 0.6 }}
                  style={{ zIndex: 1 }}
                  className="text-center"
                >
                  <Image
                    src={wireframeWeb}
                    alt="Duels wireframe web"
                    fill={false}
                    className={`${style['wireframe-web']}`}
                  />
                </motion.div>

                <motion.div
                  viewport={{ once: true }}
                  initial={{ opacity: 0, filter: 'blur(20px)', y: 100 }}
                  whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  style={{ zIndex: 1 }}
                  className="text-center pt-5"
                >
                  <Image
                    src={wireframeMobile}
                    alt="Duels wireframe mobile"
                    fill={false}
                    className={`${style['wireframe-mobile']}`}
                  />
                </motion.div>
              </Col>
            </Row>
            <Row className="py-1 py-lg-4">
              <Col
                lg={{ offset: 2, span: 8 }}
                style={{
                  position: 'relative',

                }}
                className="text-center mb-0 mb-lg-3"
              >
                <motion.div
                  viewport={{ once: true }}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  style={{ color: 'white' }}
                >
                  <p style={{ color: 'white', fontSize: '28px' }}>Join thousands of players enjoying the best betting platform in crypto</p>
                </motion.div>

              </Col>
              <Col lg={{ offset: 2, span: 8 }} className="text-start pe-3 mt-4 pt-2">
                <Row className="mx-0 px-0">
                  <Col lg={6} className="px-5 text-center mb-5 mb-lg-0">
                    <motion.div
                      viewport={{ once: true }}
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className={`${style['stat-box']}`}
                    >
                      <p style={{ fontSize: '52px', fontWeight: '600' }}>
                        <CountUp
                          enableScrollSpy
                          scrollSpyDelay={0.6}
                          scrollSpyOnce
                          end={5534}
                          start={2000}
                          duration={5}
                          style={{
                            background: '-webkit-linear-gradient(#84CDE4,#84CDE4,#84CDE4,#FFFFFF)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontFamily: 'Space Mono !important',
                            letterSpacing: '-1px',
                          }}
                        />
                      </p>
                      <p style={{ fontSize: '26px' }}>players have participated</p>
                      <Image
                        src={line}
                        alt="Gradient seperator"
                        fill={false}
                        className="w-75"
                      />
                    </motion.div>
                  </Col>

                  <Col lg={6} className="px-5 text-center mb-3 mb-lg-0">
                    <motion.div
                      viewport={{ once: true }}
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className={`${style['stat-box']}`}
                    >
                      <p style={{ fontSize: '52px', fontWeight: '600' }}>
                        <CountUp
                          enableScrollSpy
                          scrollSpyDelay={0.7}
                          scrollSpyOnce
                          prefix="$"
                          end={837491}
                          start={600000}
                          duration={5}
                          style={{
                            background: '-webkit-linear-gradient(#84CDE4,#84CDE4,#84CDE4,#FFFFFF)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontFamily: 'Space Mono !important',
                            letterSpacing: '-1px',
                          }}
                        />
                      </p>
                      <p style={{ fontSize: '26px' }}>earned by winners</p>
                      <Image
                        src={line}
                        alt="Gradient seperator"
                        fill={false}
                        className="w-75"
                      />
                    </motion.div>
                  </Col>
                </Row>
                <Row className="mx-0 px-0 mt-5">
                  <Col lg={6} className="px-5 text-center mb-5 mb-lg-0">
                    <motion.div
                      viewport={{ once: true }}
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className={`${style['stat-box']}`}
                    >
                      <p style={{ fontSize: '52px', fontWeight: '600' }}>
                        <CountUp
                          enableScrollSpy
                          scrollSpyDelay={0.8}
                          scrollSpyOnce
                          end={625474}
                          start={452400}
                          duration={5}
                          style={{
                            background: '-webkit-linear-gradient(#84CDE4,#84CDE4,#84CDE4,#FFFFFF)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontFamily: 'Space Mono !important',
                            letterSpacing: '-1px',
                          }}
                        />
                      </p>
                      <p style={{ fontSize: '26px' }}>individual bets made</p>
                      <Image
                        src={line}
                        alt="Gradient seperator"
                        fill={false}
                        className="w-75"
                      />
                    </motion.div>
                  </Col>
                  <Col lg={6} className="px-5 text-center">
                    <motion.div
                      viewport={{ once: true }}
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                      className={`${style['stat-box']}`}
                    >
                      <p style={{ fontSize: '52px', fontWeight: '600' }}>
                        <CountUp
                          enableScrollSpy
                          scrollSpyDelay={0.9}
                          scrollSpyOnce
                          end={56391}
                          start={35321}
                          duration={5}
                          style={{
                            background: '-webkit-linear-gradient(#84CDE4,#84CDE4,#84CDE4,#FFFFFF)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontFamily: 'Space Mono !important',
                            letterSpacing: '-1px',
                          }}
                        />
                      </p>
                      <p style={{ fontSize: '26px' }}>rounds played</p>
                      <Image
                        src={line}
                        alt="Gradient seperator"
                        fill={false}
                        className="w-75"
                      />
                    </motion.div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Row>
      </Container>

      <Container fluid className={style['section-container']} style={{ borderBottom: '1px solid #121B50' }}>
        <Row className="d-flex pb-5 pt-4">
          <Col lg={{ offset: 2, span: 8 }} className="text-center">
            <motion.div
              className={style['certik-badge-gradient']}
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{ zIndex: 1 }}
            >
              <div className={`${style['certik-badge']} text-start p-4 px-5`}>
                SECURED BY
                <Image
                  style={{ margin: '-4px 0px 4px 0px' }}
                  className="ms-0 ms-lg-4"
                  src={certik}
                  alt="Certik logo"
                  fill={false}
                />
              </div>
            </motion.div>
          </Col>
          <Col lg={{ offset: 2, span: 8 }} className="text-center my-5 pt-3 pb-2 px-4 px-lg-2">
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{ zIndex: 1 }}
            >
              <p className={`m-0 mb-3 ${style.description}`} style={{ color: '#FFFFFF' }}>
                BTCDuels is a non-custodial platform where you maintain control of your
                crypto at all times. Our open source
                {' '}
                <a href="https://polygonscan.com/address/0xdb414fe5a6ae09f4b58df1e5615c38c4bee10a84" target="_blank" className={`${style['description-link']}`}>smart contract</a>
                {' '}
                has passed a rigorous audit process so
                you can play with peace of mind.
              </p>
            </motion.div>
          </Col>
          <Col lg={{ offset: 2, span: 8 }} className="text-center">
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              style={{ zIndex: 1 }}
            >
              <p className={`${style['get-started-button']} d-inline-block mb-3`}>
                <a href="https://google.com">
                  Start Playing Now
                  <ArrowUpRightCircle size={28} style={{ margin: '-2px 0px 2px 8px' }} />
                </a>
              </p>
            </motion.div>
          </Col>
        </Row>
      </Container>

      {/* Footer Section */}
      <Container fluid className={style['section-container']} style={{ }}>
        <Row className="d-flex align-items-center py-5 my-3" style={{ height: '100%' }}>
          <Col lg={{ offset: 1, span: 1 }}>
            <Image src={duelsLogo} alt="duelsLogo" />
          </Col>
          <Col lg={{ offset: 1, span: 3 }} className="ps-3 ps-lg-5 my-5 my-lg-0">
            <p className="mb-2" style={{ color: 'white', fontSize: '24px' }}>Get In Touch On</p>
            <Image
              src={line}
              alt="Gradient seperator"
              fill={false}
              className="w-75"
            />

            <ListGroup horizontal className="mt-2">
              <ListGroup.Item className={`${style['footer-icon']} me-4`} style={{ color: 'white', backgroundColor: '#000717' }}>
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                  <Instagram size={30} />
                </a>
              </ListGroup.Item>
              <ListGroup.Item className={`${style['footer-icon']} me-4`} style={{ color: 'white', backgroundColor: '#000717' }}>
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                  <Twitter size={30} />
                </a>
              </ListGroup.Item>
              <ListGroup.Item className={style['footer-icon']} style={{ color: 'white', backgroundColor: '#000717' }}>
                <a href="https://discord.com" target="_blank" rel="noreferrer">
                  <Discord size={30} />
                </a>
              </ListGroup.Item>
            </ListGroup>
          </Col>

          <Col lg={{ offset: 1, span: 5 }}>
            <Row className="ps-2 ps-lg-0">
              <Col lg={6}>
                <a href="https://btcduels.com/trade" target="_blank" rel="noreferrer"><p className="d-flex justify-content-start mb-2" style={{ color: 'white', fontSize: '20px' }}>Leaderboard</p></a>
                <a href="https://btcduels.com/trade"><p className="d-flex justify-content-start mb-2" style={{ color: 'white', fontSize: '20px' }}>Tutorial</p></a>
                <a href="https://btcduels.com/trade" target="_blank" rel="noreferrer"><p className="d-flex justify-content-start mb-2" style={{ color: 'white', fontSize: '20px' }}>FAQ</p></a>

              </Col>
              <Col lg={6}>
                <a href="https://btcduels.com/trade" target="_blank" rel="noreferrer"><p className="d-flex justify-content-start mb-2" style={{ color: 'white', fontSize: '20px' }}>Affiliate Program</p></a>
                <p className="d-flex justify-content-start mb-2" style={{ color: 'white', fontSize: '20px' }}>Terms of Service</p>
                <p className="d-flex justify-content-start mb-2" style={{ color: 'white', fontSize: '20px' }}>Privacy Policy</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Home;
