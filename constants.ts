import { Level } from './types';

export const LEVELS: Level[] = [
  {
    id: 1,
    title: 'Հիմնական Ժխտում. NO',
    description: 'Սովորեք ամենակարևոր բառը՝ NO:',
    explanationIntro: 'Իսպաներենում "No"-ն միշտ դրվում է բայից առաջ: Օրինակ՝ Yo no trabajo hoy (Ես այսօր չեմ աշխատում):',
    exercises: [
      { id: 'n1', type: 'SELECT', instruction: 'Ընտրեք ճիշտ տարբերակը', prompt: 'Yo ___ trabajo hoy.', target: 'no', choices: ['no', 'si'], translation: 'Ես այսօր չեմ աշխատում:' },
      { id: 'n2', type: 'SCRAMBLE', instruction: 'Կազմեք նախադասությունը', prompt: 'Իմ հեռախոսը չի աշխատում:', target: 'Mi móvil no funciona', scrambledWords: ['funciona', 'no', 'móvil', 'Mi'], translation: 'Mi móvil no funciona.' },
      { id: 'n3', type: 'FILL', instruction: 'Լրացրեք բաց թողնված բառը', prompt: 'Ella ___ estudia español.', target: 'no', choices: ['no', 'nada', 'nunca'], translation: 'Նա իսպաներեն չի սովորում:' },
      { id: 'n4', type: 'SELECT', instruction: 'Ո՞րն է ճիշտ:', prompt: 'Մենք հաց չենք ուտում:', target: 'Nosotros no comemos pan', choices: ['Nosotros no comemos pan', 'Nosotros comemos no pan'], translation: 'Nosotros no comemos pan.' },
      { id: 'n5', type: 'SCRAMBLE', instruction: 'Կազմեք նախադասությունը', prompt: 'Ես տանը չեմ:', target: 'No estoy en casa', scrambledWords: ['casa', 'estoy', 'en', 'No'], translation: 'No estoy en casa.' },
      { id: 'n6', type: 'FILL', instruction: 'Լրացրեք բաց թողնված բառը', prompt: 'Juan ___ tiene coche.', target: 'no', choices: ['no', 'una', 'el'], translation: 'Խուանը մեքենա չունի (Զրոյական հոդ):' },
      { id: 'n7', type: 'SELECT', instruction: 'Ո՞րն է ճիշտ:', prompt: 'Ես չգիտեմ:', target: 'No sé', choices: ['No sé', 'Sé no'], translation: 'No sé.' },
      { id: 'n8', type: 'FILL', instruction: 'Լրացրեք բաց թողնված բառը', prompt: 'Aquí ___ hay azúcar.', target: 'no', choices: ['no', 'un', 'la'], translation: 'Այստեղ շաքարավազ չկա (Զրոյական հոդ):' },
      { id: 'n9', type: 'SCRAMBLE', instruction: 'Կազմեք նախադասությունը', prompt: 'Այսօր երկուշաբթի չէ:', target: 'Hoy no es lunes', scrambledWords: ['es', 'lunes', 'no', 'Hoy'], translation: 'Hoy no es lunes.' },
      { id: 'n10', type: 'SELECT', instruction: 'Ընտրեք ճիշտը', prompt: 'Pedro ___ vive aquí.', target: 'no', choices: ['no', 'nunca', 'nadie'], translation: 'Պեդրոն այստեղ չի ապրում:' }
    ]
  },
  {
    id: 2,
    title: 'Ժխտական Բառեր (Nunca, Nada, Nadie)',
    description: 'Երբեք, ոչինչ և ոչ ոք:',
    explanationIntro: 'Nunca (Երբեք), Nada (Ոչինչ), Nadie (Ոչ ոք): Եթե այս բառերը դրվում են բայից առաջ, "No" պետք չէ:',
    exercises: [
      { id: 'n11', type: 'SELECT', instruction: 'Ընտրեք ճիշտ տարբերակը', prompt: '___ come carne.', target: 'Nadie', choices: ['Nadie', 'Nada', 'No'], translation: 'Ոչ ոք միս չի ուտում:' },
      { id: 'n12', type: 'FILL', instruction: 'Լրացրեք բաց թողնված բառը', prompt: 'Yo ___ estudio los domingos.', target: 'nunca', choices: ['nunca', 'nadie', 'nada'], translation: 'Ես երբեք կիրակի օրերին չեմ սովորում:' },
      { id: 'n13', type: 'SCRAMBLE', instruction: 'Կազմեք նախադասությունը', prompt: 'Ոչ ոք չգիտի պատասխանը:', target: 'Nadie sabe la respuesta', scrambledWords: ['la', 'sabe', 'Nadie', 'respuesta'], translation: 'Nadie sabe la respuesta.' },
      { id: 'n14', type: 'SELECT', instruction: 'Ո՞րն է ճիշտ:', prompt: 'Ես ոչինչ չեմ տեսնում:', target: 'Nada veo', choices: ['Nada veo', 'No nada veo'], translation: 'Nada veo (առանց "no"-ի, քանի որ Nada-ն սկզբում է):' },
      { id: 'n15', type: 'FILL', instruction: 'Լրացրեք բաց թողնված բառը', prompt: '___ está en la clase.', target: 'Nadie', choices: ['Nadie', 'Nada', 'Nunca'], translation: 'Ոչ ոք դասարանում չէ:' },
      { id: 'n16', type: 'SCRAMBLE', instruction: 'Կազմեք նախադասությունը', prompt: 'Ես երբեք միս չեմ ուտում:', target: 'Nunca como carne', scrambledWords: ['carne', 'como', 'Nunca'], translation: 'Nunca como carne.' },
      { id: 'n17', type: 'SELECT', instruction: 'Ի՞նչ է նշանակում Nunca:', prompt: 'Nunca', target: 'Երբեք', choices: ['Երբեք', 'Ոչինչ', 'Ոչ ոք'], translation: 'Nunca = Երբեք:' },
      { id: 'n18', type: 'FILL', instruction: 'Լրացրեք բաց թողնված բառը', prompt: '___ es imposible.', target: 'Nada', choices: ['Nada', 'Nadie', 'No'], translation: 'Ոչինչ անհնար չէ:' },
      { id: 'n19', type: 'SELECT', instruction: 'Ի՞նչ է նշանակում Nadie:', prompt: 'Nadie', target: 'Ոչ ոք', choices: ['Ոչ ոք', 'Երբեք', 'Ոչինչ'], translation: 'Nadie = Ոչ ոք:' },
      { id: 'n20', type: 'SCRAMBLE', instruction: 'Կազմեք նախադասությունը', prompt: 'Ոչինչ չի պատահել:', target: 'Nada ha pasado', scrambledWords: ['ha', 'pasado', 'Nada'], translation: 'Nada ha pasado.' }
    ]
  },
  {
    id: 3,
    title: 'Կրկնակի Ժխտում',
    description: 'Իսպանական կրկնակի ժխտման գաղտնիքը:',
    explanationIntro: 'Եթե ժխտական բառը բայից հետո է, ապա բայից առաջ պարտադիր պետք է լինի "No": Սա կոչվում է կրկնակի ժխտում:',
    exercises: [
      { id: 'n21', type: 'SELECT', instruction: 'Ո՞րն է ճիշտ:', prompt: 'Ես երբեք միս չեմ ուտում:', target: 'No como carne nunca', choices: ['No como carne nunca', 'Como carne nunca'], translation: 'No como carne nunca.' },
      { id: 'n22', type: 'FILL', instruction: 'Լրացրեք բաց թողնված բառը', prompt: 'No sabe la respuesta ___.', target: 'nadie', choices: ['nadie', 'nada', 'no'], translation: 'Ոչ ոք չգիտի պատասխանը (բայից հետո):' },
      { id: 'n23', type: 'SCRAMBLE', instruction: 'Կազմեք նախադասությունը', prompt: 'Ես ոչինչ չեմ ուզում:', target: 'No quiero nada', scrambledWords: ['nada', 'quiero', 'No'], translation: 'No quiero nada.' },
      { id: 'n24', type: 'SELECT', instruction: 'Ո՞րն է կրկնակի ժխտումը:', prompt: 'Նա երբեք չի գալիս:', target: 'No viene nunca', choices: ['No viene nunca', 'Nunca viene'], translation: 'No viene nunca (Կրկնակի ժխտում):' },
      { id: 'n25', type: 'FILL', instruction: 'Լրացրեք բաց թողնված բառը', prompt: 'No hay ___ en la neverա.', target: 'nada', choices: ['nada', 'nadie', 'no'], translation: 'Սառնարանում ոչինչ չկա:' },
      { id: 'n26', type: 'SCRAMBLE', instruction: 'Կազմեք նախադասությունը', prompt: 'Ես ոչ ոքի չեմ տեսնում:', target: 'No veo a nadie', scrambledWords: ['nadie', 'veo', 'a', 'No'], translation: 'No veo a nadie.' },
      { id: 'n27', type: 'SELECT', instruction: 'Ո՞րն է ճիշտ:', prompt: 'Այստեղ ոչ ոք չկա:', target: 'No hay nadie aquí', choices: ['No hay nadie aquí', 'Hay nadie aquí'], translation: 'No hay nadie aquí.' },
      { id: 'n28', type: 'FILL', instruction: 'Լրացրեք բաց թողնված բառը', prompt: 'No estudio español ___.', target: 'nunca', choices: ['nunca', 'nadie', 'algo'], translation: 'Ես երբեք իսպաներեն չեմ սովորում:' },
      { id: 'n29', type: 'SELECT', instruction: 'Ընտրեք ճիշտ տարբերակը', prompt: 'No tengo [_] coche.', target: 'Զրոյական հոդ', choices: ['Զրոյական հոդ', 'un coche', 'el coche'], translation: 'Մեքենա չունեմ (ժխտականում հոդը դուրս է ընկնում):' },
      { id: 'n30', type: 'SCRAMBLE', instruction: 'Կազմեք նախադասությունը', prompt: 'Ես ոչինչ չգիտեմ:', target: 'No sé nada', scrambledWords: ['nada', 'sé', 'No'], translation: 'No sé nada.' }
    ]
  }
];

export const VOCABULARY = [
  { id: 'v1', es: 'No', hy: 'Ոչ / Չի' },
  { id: 'v2', es: 'Nunca', hy: 'Երբեք' },
  { id: 'v3', es: 'Nada', hy: 'Ոչինչ' },
  { id: 'v4', es: 'Nadie', hy: 'Ոչ ոք' },
  { id: 'v5', es: 'Ningún / Ninguna', hy: 'Ոչ մի' },
];
