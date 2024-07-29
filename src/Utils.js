export  const addErrorf=(errors)=> errors? {error:true}:{error:false};
export const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
export const pawdRegExp = /^(?=.[A-Za-z]) (?=.\d) (7=.*[@$!#7&])[A-Za-z\d@$!%*#?&] {8,}$/;
export const stringRegExp=/^[a-zA-Z]$/;