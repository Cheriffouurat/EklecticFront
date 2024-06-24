export enum ServiceTypeEnum {
  JOUR = 'JOUR',
  MOIS = 'MOIS',
  TRIMESTRE = 'TRIMESTRE',
  SEMESTRE = 'SEMESTRE',
  ANNUEL = 'ANNUEL'
}
export const ServiceTypeEnumArray = (Object.keys(ServiceTypeEnum) as Array<keyof typeof ServiceTypeEnum>).map(key => ({ key, value: ServiceTypeEnum[key] }));
