import type {ReactNode} from "react";
import styles from "./ModuledButton.module.css";
import  ModuleButtonColors from "./ModuleButtonColors.ts";

interface ModuleButtonProps {
     color?: ModuleButtonColors|null,
    children: ReactNode,
}
const ModuledButton = ({color= ModuleButtonColors.Primary, children}:ModuleButtonProps)=>{
    return (
        <button className={`${styles.button} ${styles[`${color}`]}`}>
            {children}
        </button>
    )
}
export default ModuledButton;