export const getLatestImageData = (history: DrawHistory) => {
  if(history.length > 0) {
  return history[history.length - 1];
  }
  return null;
}