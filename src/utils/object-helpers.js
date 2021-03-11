
export const updateObjectInArray = (object, id, objectPropName, newobjectProps)  => {
   return object.map(u => {
      if (u[objectPropName] === id) {
         return { ...u, ...newobjectProps };
      }
      return u;
   })
}