import './App.css';
import TopTabs from './components/Organisms/TopTabs/TopTab'
import Container from '@material-ui/core/Container';
import { ThemeProvider } from '@material-ui/styles';
import responsiveFontTheme from './Theme/index'

function App() {
  return (
    <ThemeProvider theme={responsiveFontTheme} >
      <Container maxWidth='md'>
        <TopTabs/>
      </Container>
  </ThemeProvider>
  );
}

export default App;
