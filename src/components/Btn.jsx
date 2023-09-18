// export const Button = props => {
//     return <button className="btn">hello btn</button>
// }

export const Button = props => {
    return <button className={props.variant}></button>
}