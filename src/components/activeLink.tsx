import Link, {LinkProps} from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";


interface ActiveLinkProps extends LinkProps{
    children: ReactElement;
    shouldMatchExactHref? : boolean;
}

export default function ActiveLink({children,shouldMatchExactHref = false, ...rest} : ActiveLinkProps){
    
    //asPath me da a rota atual
    const { asPath} = useRouter();
    let isActive = false;

    //url precisa ser igual a ancora para o link ficar ativo
    if(shouldMatchExactHref && (asPath === rest.href || asPath === rest.as)){
        isActive = true
    }

    //url não precisa ser igual a ancora para o link ficar ativo p.e: rotas filhas  que só possuem parte da rota 
    if(!shouldMatchExactHref && (asPath.startsWith(String(rest.href)) || asPath.startsWith(String(rest.as)))){
        isActive = true;
    }

    return(

        <Link {...rest} >
            {cloneElement(children, {
                color: isActive ? 'pink.400' : 'gray.50'
            })}
        </Link>
    )
}