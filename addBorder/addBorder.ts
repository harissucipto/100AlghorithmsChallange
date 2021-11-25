export function addBorder(picture: string[]): string[] {
  const wall = "*".repeat(picture[0].length + 2);
  picture.unshift(wall);
  picture.push(wall);

  // add first and last string to last item
  for (let i = 1; i < picture.length - 1; i++) {
    picture[i] = "*".concat(picture[i], "*");
  }
  return picture;
}

console.log(addBorder(["abc", "ded"]));
