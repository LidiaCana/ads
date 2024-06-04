import 'server-only'
 
const dictionaries : any= {
  en: () => import('../dictionaries/en.json').then((module) => module.default),
  sp: () => import('../dictionaries/sp.json').then((module) => module.default),
}
 
export const getDictionary = async (locale: any) => dictionaries[locale]() 