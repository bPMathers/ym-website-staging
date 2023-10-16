import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import HomePageComponent from './Pages/Home/HomePageComponent';
import ContactPageComponent from './Pages/Contact/ContactPageComponent';
import ServicesPageComponent from './Pages/Services/ServicesPageComponent';
import ProjectsPageComponent from './Pages/Projects/ProjectsPageComponent';
import MenuComponent from './Components/Menu/MenuComponent';
import theme from './ui/Theme';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import HomePageComponentMobile from './Pages/Home/HomePageComponentMobile';
import MenuComponentMobile from './Components/Menu/MenuComponentMobile';
import ContactPageComponentMobile from './Pages/Contact/ContactPageComponentMobile';
const useStyles = makeStyles((theme) => ({}));

export default function App() {
    const classes = useStyles();
    // const theme = useTheme();

    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    console.log('isMobile2 ---->', isMobile);

    return (
        <ThemeProvider theme={theme}>
            <Router>
                <div
                    style={{
                        // height: '100vh',
                        // width: '100vw',
                        // position: 'relative',
                        backgroundColor: theme.palette.primary.main,
                    }}
                >
                    {!isMobile && <MenuComponent />}
                    {isMobile && <MenuComponentMobile />}

                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/contact">
                            {!isMobile && <ContactPageComponent />}
                            {isMobile && <ContactPageComponentMobile />}
                        </Route>
                        {/* <Route path="/services">
                            <ServicesPageComponent />
                        </Route>
                        <Route path="/projects">
                            <ProjectsPageComponent />
                        </Route> */}
                        <Route path="/">
                            {!isMobile && <HomePageComponent />}
                            {isMobile && <HomePageComponentMobile />}
                        </Route>
                    </Switch>
                </div>
            </Router>
        </ThemeProvider>
    );
}
