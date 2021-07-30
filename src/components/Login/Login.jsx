import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import s from "./../Common/FormsControls/FormsControls.module.css"

const maxLength30 = maxLengthCreator(30)

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"} name={"email"} component={Input} validate={[required, maxLength30]}/>
            </div>
            <div>
                <Field placeholder={"Password"} type={"password"} name={"password"} component={Input}
                       validate={[required, maxLength30]}/>
            </div>
            <div>
                <label>
                    <Field type={"checkbox"} name={"rememberMe"} component={"input"}/> remember me
                </label>
            </div>
            <div>
                {props.error &&
                <div className={ s.formSummaryError }>{props.error}</div> }
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: "login"})(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
        isAuth: state.auth.isAuth
    }
)
export default connect(mapStateToProps, {login})(Login);