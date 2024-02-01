export const SearchFilters = (searchQuery, searchFields)=> {
  if (!searchQuery || !searchFields || !searchFields.length) {
    return {};
  }

  const searchRegex = new RegExp(`\\b${searchQuery}`, "i");
  const orFilters = searchFields.map((field) => ({ [field]: searchRegex }));

  return { $or: orFilters };
};
