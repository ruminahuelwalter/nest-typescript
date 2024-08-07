import axios from "axios";


export interface HttpAdapter {
    get<T> ( url: string): Promise<T>;
}


export class PokeApiFetchAdapter implements HttpAdapter {

    async get<T>( url: string ):Promise<T>{
    const resp = await fetch( url );
    const data: T = await resp.json();
    console.log('con fetch');
    return data;
    }
}

export class PokeApiAdapter implements HttpAdapter {

    private readonly axios= axios;

    async get<T> ( url: string): Promise<T>{
        // petición get
        const { data } = await this.axios.get<T>( url );
        console.log('con axios');
        return data;
    }

    async post( url: string, data: any) {

    }

    async pathc( url: string, data: any){

    }

    async delete(url: string){

    }
}