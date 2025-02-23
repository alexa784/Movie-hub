import bullsEye from "../assets/bulls-eye.webp";
import meh from "../assets/meh.webp";
import thumbsUp from "../assets/thumbs-up.webp";

class Emoji{
    path:string;
    width:number
    min:number;
    max:number;
    public constructor(path:string,min:number,max:number,width=20){
        this.width=width;
        this.path=path;
        this.min=min;
        this.max=max;
    }
    isIt=(score:number)=>{
        return this.min<=score && score<this.max? true:false;
    }
}
const getCorrespondingEmoji=(score:number)=>{
    const mehEmoji=new Emoji(meh,0,500);
    const thumbsUpEmoji=new Emoji(thumbsUp,500,1000);
    const bullsEyeEmoji=new Emoji(bullsEye,1000,15000,25);
    
    if(mehEmoji.isIt(score)) return mehEmoji;
    if(thumbsUpEmoji.isIt(score)) return thumbsUpEmoji;
    if(bullsEyeEmoji.isIt(score)) return bullsEyeEmoji;
}

export default getCorrespondingEmoji;