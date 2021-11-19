

export function Display(props){
    return(
        <div className={'display'} style={{visibility:props.isVisible}}>
            Info
            <div onClick={props.closeDisplay} >close</div>
        </div>
    )
}