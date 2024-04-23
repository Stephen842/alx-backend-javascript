export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees); // Use const instead of let

  let currentIndex = 0;
  let currentDepartmentIndex = 0;

  return {
    next() {
      if (currentDepartmentIndex >= departments.length) {
        return { done: true };
      }

      const currentDepartment = departments[currentDepartmentIndex];
      const employee = currentDepartment[currentIndex];
      currentIndex += 1; // Use += 1 instead of ++

      if (currentIndex >= currentDepartment.length) {
        currentIndex = 0;
        currentDepartmentIndex += 1; // Use += 1 instead of ++
      }

      return { value: employee, done: false };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}
