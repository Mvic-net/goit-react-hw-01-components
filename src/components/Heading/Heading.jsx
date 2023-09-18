import css from './Heading.module.css'

export const Heading = ({ children, className ='' }) => {
    return <h2 className={`${css.heading}`}>{children}</h2>
}

