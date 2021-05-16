import {
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";

import Topic from './Topic';
export default function Topics() {
    let match = useRouteMatch();
  
    return (
      <div>
        <h2>Topics</h2>
  
        <ul>
          <li>
          <Link to={`${match.url}/1`}>
              1
            </Link>
          </li>
          <li>
            <Link to={`${match.url}/2`}>
              2
            </Link>
          </li>
          <li>
            <Link to={`${match.url}/hello`}>
              hello
            </Link>
          </li>
        </ul>
  
        {/* The Topics page has its own <Switch> with more routes
            that build on the /topics URL path. You can think of the
            2nd <Route> here as an "index" page for all topics, or
            the page that is shown when no topic is selected */}
        <Switch>
          <Route path={`${match.path}/:Id`}>
            <Topic />
          </Route>
          <Route path={match.path}>
            <h3>Please select a topic.</h3>
          </Route>
        </Switch>
      </div>
    );
  }