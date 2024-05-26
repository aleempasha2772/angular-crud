import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api";


export class InMemoryDataService implements InMemoryDbService{

    createDb(){
        const items = [
            { id: 1, name: 'Item 1' },
            { id: 2, name: 'Item 2' },
            { id: 3, name: 'Item 3' }
        ];
        return {items};
    }    
}