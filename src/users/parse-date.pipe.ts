// parse-date.pipe.ts
import { Injectable, PipeTransform, ArgumentMetadata, BadRequestException } from '@nestjs/common';

@Injectable()
export class ParseDatePipe implements PipeTransform {
  transform(value: string | number, metadata: ArgumentMetadata) {

    const {data:isKeyGiven} = metadata;

    if(isKeyGiven)
    {
        value=value;
    }else{
        value=value["timestamp"];
    }

    const date = this.convertTimestamp(value);
    if (!date || isNaN(+date)) {
        const errorMsg = isKeyGiven ? `${isKeyGiven} is invalid` :"Invalid date";
        
      throw new BadRequestException('Invalid date');
    }
    
    const {metatype}=metadata;

    switch(metatype)
    {
        case String:
            return date.toUTCString();

        case Date:
            return date;
            
        case Number:
            return date.getTime();
        
        default:
            return date.toISOString();    
    }
  }


  

  private convertTimestamp(timestamp: string | number): Date {
    timestamp = +timestamp;
    const isSecond = !(timestamp > (Date.now() + 24 * 60 * 60 * 1000) / 1000);
    return isSecond ? new Date(timestamp * 1000) : new Date(timestamp);
  }
}
