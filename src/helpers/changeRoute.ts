import { NavigateFunction, NavigateOptions, To } from "react-router-dom";

export default function (navigate: NavigateFunction, route: To | number, options?: NavigateOptions){
    scrollTo({top: 0});
    navigate(route as To, options)
}