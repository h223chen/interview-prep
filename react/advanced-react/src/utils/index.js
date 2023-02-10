export function getClass(i) {
  if (i % 5 === 0) {
      return 'big';
  }
  else if (i % 6 === 0) {
      return 'wide'
  }
}

export function randomize(arr) {
  const len = arr.length

  for (let i=0; i<len; i++) {
    const j = Math.floor(Math.random()*(len))
    const k = Math.floor(Math.random()*(len))

    const tmp = arr[j];
    arr[j] = arr[k];
    arr[k] = tmp
  }

  return arr
}