import React from 'react';
import Particles from 'react-particles-js';
import { useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';
import RouteMap from '../../../constants/RouteMap';
import './not-found.scss';

const NotFound = () => {
  const history = useHistory();
  return (
    <>
      <div className="error-page">
        <div>
          <h1 data-h1="404">404</h1>
          <p data-p="NO ENCONTRADO">NO ENCONTRADO</p>
          <Button onClick={() => history.push(RouteMap.Dashboard.root)} color="primary" size="lg" block>
            Volver
          </Button>
        </div>
      </div>
      <Particles
        params={{
          particles: {
            number: {
              value: 5,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: '#fcfcfc',
            },
            shape: {
              type: 'circle',
            },
            opacity: {
              value: 0.5,
              random: true,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.2,
                sync: false,
              },
            },
            size: {
              value: 140,
              random: false,
              anim: {
                enable: true,
                speed: 10,
                size_min: 40,
                sync: false,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              enable: true,
              speed: 8,
              direction: 'none',
              random: false,
              straight: false,
              out_mode: 'out',
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: {
                enable: false,
              },
              onclick: {
                enable: false,
              },
              resize: true,
            },
          },
          retina_detect: true,
        }}
      />
    </>
  );
};

export default NotFound;
