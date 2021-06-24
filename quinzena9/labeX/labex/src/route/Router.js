import ListTripsPage from '../pages/ListTripsPage/ListTripsPage'
import HomePage from '../pages/HomePage/HomePage'
import AdminHomePage from '../pages/AdminHomePage'
import ApplicationFormPage from '../pages/ApplicationFormPage'
import CreateTripPage from '../pages/CreateTripPage'
import LoginPage from '../pages/LoginPage'
import TripDetailsPage from '../pages/TripDetailsPage'
import {BrowserRouter, Switch, Route} from 'react-router-dom'


function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'}>
      
        <HomePage/>
        </Route>
        <Route exact path={"/trips/list"}>
        <ListTripsPage/>
        </Route>
        <Route exact path={"/admin/trips/list"}>
        <AdminHomePage/>
        </Route>
        <Route exact path={"/trips/application"}>
        <ApplicationFormPage/>
        </Route>
        <Route exact path={"/admin/trips/create"}>
        <CreateTripPage/>
        </Route>
        <Route exact path={"/login"}>
        <LoginPage/>
        </Route>
        <Route exact path={"/tripDetails"}>
        <TripDetailsPage/>
        </Route>
      
      </Switch>
    </BrowserRouter>
  );
}

export default Router;