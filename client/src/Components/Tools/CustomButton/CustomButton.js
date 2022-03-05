import './CustomButton.css'
function CustomButton ( props ) {

    const handleClick = () => {

        console.log('Click!')
        // console.log('Function!-> ' + props.do())
        props.do()
        

        

    }

    return  (<div>

        <button onClick={( )=> handleClick()} 
            style = {{
                position: props.position,
                top: props.top,
                right: props.right,
                left: props.left,
                transform: props.transform,
                height: props.height,
                backgroundColor: props.bgColor,
                
                
                

            }}
        > 
         {props.defaultText===true?'CustomButton':null}
        <img  src={props.image}  style={{
            width: props.width,
            backgroundColor: props.imgBgColor,
            height: props.imgHeight
            

            }} alt=' '></img>

         </button >

    </div>)

}

export default CustomButton