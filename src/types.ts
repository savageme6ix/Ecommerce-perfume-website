export interface Perfume{
    id:number;
    name:string;
    brand:string;
    price:number;
    image:string;
    quantiy:number;
    /** Shown in product card hint (Supabase / API) */
    description?: string;
  }