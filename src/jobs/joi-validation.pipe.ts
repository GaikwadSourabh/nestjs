import {
    ArgumentMetadata,
    BadRequestException,
    Injectable,
    PipeTransform,
  } from "@nestjs/common";
  import { ObjectSchema } from "joi";
  
  @Injectable()
  export class JoiValidationPipe implements PipeTransform {
    constructor(private schema: ObjectSchema) {}
  
    transform(value: Record<string, any>, metadata: ArgumentMetadata) {
      const { error } = this.schema.validate(value);
  
      if (error) {
        // You can log or return detailed errors
        console.log(error.details);
        throw new BadRequestException(
          `Validation failed: ${error.details.map((d) => d.message).join(", ")}`
        );
      }
  
      return value;
    }
  }
  