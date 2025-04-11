import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { MongooseModuleOptions, MongooseOptionsFactory } from "@nestjs/mongoose";

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory
{
    constructor(private config:ConfigService){}

    createMongooseOptions(): Promise<MongooseModuleOptions> | MongooseModuleOptions {
        const username = this.config.get("DATABASE_USER");
        const password = this.config.get("DATABASE_PASSWORD");
        const host = this.config.get("DATABASE_HOST");
        const db = this.config.get("DATABASE_NAME");

        const uri = `mongodb+srv://${username}:${password}@${host}/${db}?retryWrites=true&w=majority&appName=Cluster0`;
        console.log('🌐 Connecting to cloud MongoDB..............');

        return {
            uri,
            // useNewUrlParser:true,
            // useUnifiedTopology:true,
        }
      }
    }
