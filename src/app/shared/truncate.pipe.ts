import {Pipe} from "@angular/core";

@Pipe({
    name: 'truncate'
})

export class TruncatePipe {
    transform(value: string, limit?: number, trail?: string): string {
        if(!limit){
            return value;
        }
        if(!trail){
            trail = "..."
        }
        return value.length > limit ? value.substring(0, limit) + trail : value;
    }
}
