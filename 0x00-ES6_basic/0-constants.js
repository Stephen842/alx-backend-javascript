export function taskFirst() {
  const task = 'I prefer const when I can.'; // i instantiated variables using let
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  let combination = 'But sometimes let'; //  i instantiated variables using let
  combination += getLast();

  return combination;
}
