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
  const currentPage = routes.find(r => r.to === pathname) || {};
  const title = currentPage.title;
  return (
    <AppBar logoSrc={logo} title={title} navigationLinks={routes} />
  )
}