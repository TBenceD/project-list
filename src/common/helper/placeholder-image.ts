export function placeholderImage(title: string) {
  return `https://placehold.co/340x128?text=${title
    .trim()
    .replace(" ", "")
    .substring(0, 3)}`;
}
