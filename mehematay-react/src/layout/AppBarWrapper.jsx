import {useLocation} from 'react-router-dom'
import {AppBar} from "../components";
import logo from '../styles/assets/images/ic_launcher.png';

const routes = [
  { title: 'מאימתי', to: '/'},
  { title: 'זמני היום', to: '/day-times'},
  { title: 'שעון מעורר שבת', to: '/shabat-alarms'},
  { title: 'אודות', to: '/about'}
];
export default function AppBarWrapper() {
  const {pathname} = useLocation();
  let title = 'מאימתי';
  const navigationLinks = routes.map(r => {
      if (pathname === r.to) {
          r.active = true;
          title = r.title;
      } else {
          r.active = false;
      }
      return r;
  })
  return (
    <AppBar logoSrc={logo} title={title} navigationLinks={navigationLinks} />
  )
}