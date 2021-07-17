import s from "./../Dialogs.module.css";

const Message = (props) => {
    return (
        <div className={s.item}>
            <div>
                <div className="user_name">{props.name}</div>
                <div className={s.user}>
                    <img src={props.img}/>
                </div>
            </div>
            <div>
                <div className="message_inner">
                    {props.msg}
                </div>
            </div>
        </div>
    )
}

export default Message;
