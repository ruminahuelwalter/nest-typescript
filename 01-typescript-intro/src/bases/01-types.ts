export const name: string = 'Walter';
export const age: number = 30;
export const isValid: boolean = true;

export const templateString = ` 
Esto es un script
multilinea que
puede tener
" dobles
' simples
inyectar valores ${ name }
expresiones ${ 1 + 1 }
booleanos ${ isValid }
`;

console.log(templateString);