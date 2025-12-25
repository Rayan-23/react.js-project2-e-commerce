


/**
 * 
 * @param text - The text to be sliced
 * @param max - Maximum allowed length (default: 50)
 * @returns The sliced text with ellipsis if needed 
 */

export function rextSlicer(text:string,max:number=45){
    if(text.length>=max){
        return`${text.slice(0,max)}...`
    }else{
        return text
    }

}