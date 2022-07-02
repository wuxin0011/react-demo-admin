import {Link} from "react-router-dom";
import MySvg from "@/components/svg";
import NotFoundSVG from '@/assert/img/svg/NotFound.svg'
export const NotFound = () => {
    return (
        <div className="error-page">
            <h2>页面未找到！404！</h2>
            <MySvg url={NotFoundSVG} width={100}/>
            <Link to="/">首页</Link>
        </div>
    )
}


export const NotLogin = () => {
    return (
        <div className="error-page">
            <h2>请登录！</h2>
            <Link to="/">首页</Link>
        </div>
    )
}


export const NotAuth = () => {
    return (
        <div className="error-page">
            <h2>无权限访问！</h2>
            <Link to="/">首页</Link>
        </div>
    )
}