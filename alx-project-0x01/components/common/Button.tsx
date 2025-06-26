import React from 'react';


interface ButtonProps{
    title: string,
    onClick: () => void,
}



const Button : React.FC<ButtonProps>=({title, onClick}) =>{
    return(
        <button onClick={onClick} 
               className="px-4 py-2 bg bg-blue-500 rounded-full hover:bg-blue-700">
            {title}
        </button>
    );
}

export default Button;