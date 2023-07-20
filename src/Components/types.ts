
export type DataItem={
    id?:number ,  
    type: string,
    size: string,
    color: string,
    photo: string,
  }

  export type InputTypes={
    setValue:(value:string)=>void;
    value:string
    
  }
 
  
  export type SelectTypes={
   
    placeholder:string;
    options:string[] 
  } & InputTypes
 