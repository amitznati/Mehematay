import React from 'react';
import { HashRouter as Router, Route, Switch, NavLink } from 'react-router-dom';

import {DayTimes, ShabatAlarm} from '../screens';
import {AppBar, Container} from 'mehematay-ui-library';
import * as logo from '../styles/assets/ic_launcher_round.png';

// const NearestPray = () => (<div>Nearest Pray</div>);
const About = () => (<div>About</div>);
const Home = () => (<div>Home</div>);

const routes = [
  { title: 'מאימתי', to: '/', component: Home, linkComponent: {comp: NavLink, props: {to: '/', exact: true}}},
  { title: 'זמני היום', to: '/day-times', component: DayTimes, linkComponent: {comp: NavLink, props: {to: '/day-times', exact: true}}},
  { title: 'שעון מעורר שבת', to: '/shabat-alarms', component: ShabatAlarm, linkComponent: {comp: NavLink, props: {to: '/shabat-alarms', exact: true}} },
  { title: 'אודות', to: '/about', component: About, linkComponent: {comp: NavLink, props: {to: '/about', exact: true}} }
];
const navigationLinks = routes.map(({title, to, linkComponent}) => ({
  title, to, linkComponent
}));
export const Index = () => {
  return (
    <Router>
      <nav>
        <Switch>
          {navigationLinks.map(route => (
            <Route key={route.to} exact path={route.to} >
              <AppBar navigationLinks={navigationLinks.map(link => ({...link, active: link.title === route.title}))} logoSrc={logo} title={route.title} />
            </Route>
          ))}
        </Switch>
      </nav>
      <main>
        <Container maxWidth="lg" disableGutters>
          <Switch>
            {routes.map(route => (<Route key={route.to} exact path={route.to} component={ route.component } />))}
          </Switch>
        </Container>
      </main>
    </Router>
  );
};

export default Index;
