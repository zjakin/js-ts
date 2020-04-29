const metadataKey = Symbol('projected');

function registerProperty(target: object, propertyKey: string): void {
  let properties: string[] = Reflect.getMetadata(metadataKey, target);

  if (properties) {
    properties.push(propertyKey);
  } else {
    properties = [propertyKey];
    Reflect.defineMetadata(metadataKey, properties, target);
  }
}

export function projected(): (target: object, propertyKey: string) => void {
  return registerProperty;
}

export function getProjectedProperties(origin: any): object {
  const properties: string[] = Reflect.getMetadata(metadataKey, origin);
  const result: any = {};
  properties.forEach(key => (result[key] = origin[key]));
  return result;
}
