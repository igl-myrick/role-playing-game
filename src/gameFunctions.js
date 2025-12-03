export const rollCrit = () => {
  const result = Math.floor(Math.random() * 10) + 1;
  return result;
}

export const handleCombat = (atk, def) => {
  const result = (atk / def) * 3;
  return result;
}