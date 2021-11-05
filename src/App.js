import { Component } from 'react';
// import PropTypes from 'prop-types';
// import shortid from 'shortid';
import Container from './components/Container';
import Section from './components/Section';
import ReviewsWidget from './components/ReviewsWidget';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Section title="Виджет отзывов">
          <ReviewsWidget />
        </Section>
      </Container>
    );
  }
}
