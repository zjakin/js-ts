import { injectable, unmanaged } from 'inversify';
import { Document, Model, SchemaDefinition, Schema } from 'mongoose';

@injectable()
export class MongooseRepository<TModel extends Document> {
  protected _name: string;
  model: Model<TModel>;

  constructor(@unmanaged() name: string, @unmanaged() schemaDefinition: SchemaDefinition, @unmanaged() db: any) {
    this._name = name;
    const schema = new Schema(schemaDefinition, {
      collection: this._name,
    });
    this.model = db.model(this._name, schema);
  }
}
