export default function deleteItemFromArray(array, item) {
  array.splice(item, 1)
  return array
}
