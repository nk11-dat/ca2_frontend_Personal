import React, {useState} from "react";
import {Outlet} from "react-router-dom";
import {Button, Form} from "react-bootstrap";

function LoginForm({login, loginCredentials, setLoginCredentials}) {
    // const init = { username: "", password: "" };
    // const [loginCredentials, setLoginCredentials] = useState(init);

    const performLogin = (evt) => {
        evt.preventDefault();
        login(loginCredentials.username, loginCredentials.password);
    }
    const onChange = (evt) => {
        console.log(evt);
        setLoginCredentials({ ...loginCredentials,[evt.target.id]: evt.target.value })
    }

    return (

        <div>
            <form onChange={onChange} className={"justify-content-center"}
            >
                <h2 className={"align-content-center"}>Login</h2>
                <input  placeholder="User Name" id="username" />
                <input  placeholder="Password" id="password" />
                <button onClick={performLogin}>Login</button>
            </form>

            {/*<Form >*/}
            {/*    <Form.Group onChange={onChange} className="mb-3" controlId="formBasicUser">*/}
            {/*        <Form.Label>User Name</Form.Label>*/}
            {/*        <Form.Control onChange={onChange} type="username" placeholder="User Name" />*/}
            {/*        <Form.Text className="text-muted">*/}
            {/*            We'll never share your search history with anyone (except the FBI).*/}
            {/*        </Form.Text>*/}
            {/*    </Form.Group>*/}

            {/*    <Form.Group onChange={onChange} className="mb-3" controlId="formBasicPassword">*/}
            {/*        <Form.Label>Password</Form.Label>*/}
            {/*        <Form.Control onChange={onChange} type="password" placeholder="Password" />*/}
            {/*    </Form.Group>*/}
            {/*    <Button onClick={performLogin} variant="primary">*/}
            {/*        Login*/}
            {/*    </Button>*/}
            {/*</Form>*/}
        </div>
    )

}

export default LoginForm;