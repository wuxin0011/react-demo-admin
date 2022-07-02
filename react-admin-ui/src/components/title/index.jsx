const title = (props) => {
    if (props && props.meta && props.meta.title) {
        window.document.title = props.title
    } else {
        window.document.title = 'react-admin'
    }
}