export const required = value => {
   if (value) return undefined;
   return 'error requaired field'; 
}


export const maxLength = (max) => (value) => {
   if (value.length > max) return 'error max-length';
   return undefined; 
}