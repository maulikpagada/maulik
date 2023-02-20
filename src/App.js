import { Route, Switch } from 'react-router-dom';
import employee from './Admin/container/employee';
import Layout from './Admin/component/Layout'
import Contact from './Admin/container/Contact';

function App() {
  return (
    <>
      <Layout>
        <Switch>
          {/* <Route exact path="/empolyee" component={employee} /> */}
          <Route exact path="/Contact" component={Contact} />
        </Switch>
      </Layout>
    </>
  );
}

export default App;
