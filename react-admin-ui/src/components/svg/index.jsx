import DefaultSVG from '../../assert/img/svg/Default.svg'

const defaultURl = (props) => {
    return props && props.url ? props.url : DefaultSVG
}

const defaultWidth = (props) => {
    return props && props.width ? props.width : 200
}

const defaultHeight = (props) => {
    return props && props.width ? props.width : 200
}

const defaultAlt = (props) => {
    return props && props.alt ? props.alt : ''
}


const MySvg = (props) => {
    return (
        <img src={defaultURl(props)}
             width={defaultWidth(props)}
             height={defaultHeight(props)}
             alt={defaultAlt(props)}/>)
}

export default MySvg