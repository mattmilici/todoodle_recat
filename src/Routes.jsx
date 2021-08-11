import { Switch, Route } from "react-router-dom";

import App from "./App"
import PasswordReset from "./PasswordReset";

function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={App} />
            <Route path="/resetPassword" exact component={PasswordReset} />
        </Switch>
    )
}

export default Routes
