import { Type } from "class-transformer";
import { IsArray, IsBoolean, IsEmail, IsNotEmpty, IsNumberString, IsOptional, IsString, ValidateNested } from "class-validator";

export class LocationDTO{
    @IsString()
    @IsNotEmpty()
    city:string;

    @IsString()
    @IsNotEmpty()
    country:string;
}
export class CreateJobDTO{

    @IsString()
    @IsNotEmpty()
    companyName:string;
    
    @IsString()
    @IsNotEmpty()
    title:string;

    @IsEmail()
    email:string;

    @IsNumberString()
    @IsNotEmpty()
    experience:number;

    @IsNumberString()
    @IsNotEmpty()
    salary:number;

    @IsArray()
    @IsOptional()
    tags?:string[];

    @IsBoolean()
    @IsOptional()
    isActive?:boolean;

    @ValidateNested()
    @Type(()=>LocationDTO)
    location:LocationDTO;
}