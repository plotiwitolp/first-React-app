import React from "react";
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../Common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import s from "./../Common/FormsControls/FormsControls.module.css"

const maxLength30 = maxLengthCreator(30)

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField("Email", "email", [required, maxLength30], Input)}
            {createField("Password", "password", [required, maxLength30], Input, {type: "password"})}
            {createField(null, "rememberMe", null, Input, {type: "checkbox"},"remember me")}
            <div>
                {error &&
                <div className={s.formSummaryError}>{error}</div>}
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