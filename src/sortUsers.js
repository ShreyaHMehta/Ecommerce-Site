export default function SortUsers({ users, reverse }) {
  const dt = reverse
    ? [...users].sort((a, b) => b.age - a.age)
    : [...users].sort((a, b) => a.age - b.age);
  return dt;
}