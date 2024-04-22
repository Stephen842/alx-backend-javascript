export default function taskBlock(trueOrFalse) {
  let task = false; // i used let instead of var
  let task2 = true; // i used let instead of var

  if (trueOrFalse) {
    task = false; // assigned value to existing variables without redeclaring
    task2 = true; // assigned value to existing variables without redeclaring
  }

  return [task, task2];
}
