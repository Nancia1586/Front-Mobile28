import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { calendar, car, informationCircle, location, people, person, statsChartOutline, statsChartSharp } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Login from './pages/Login';
import HistoriqueRechargeCompte from './pages/HistoriqueRechargeCompte';
import ListeEnchere from './pages/ListeEnchere';
import Profil from './pages/Profil';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          {/* <Route exact path="/vehicules/:idVehicule">
            <DetailVehicule />
          </Route> */}
          <Route path="/liste_enchere">
            <ListeEnchere />
          </Route>
          <Route path="/historique_recharge_compte">
            <HistoriqueRechargeCompte />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/profil">
            <Profil />
          </Route>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="vehicule" href="/Vehicule">
            <IonIcon icon={person} />
            <IonLabel>Login</IonLabel>
          </IonTabButton>
        </IonTabBar>

      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
