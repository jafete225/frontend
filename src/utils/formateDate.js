export const formateDate = (date, config = {}) => {
    if (!date) return "Data inválida"; 
  
    const defaultOptions = { day: "numeric", month: "long", year: "numeric" };
    const options = { ...defaultOptions, ...config };
  
    return new Date(date).toLocaleDateString("pt-BR", options);
  };
  