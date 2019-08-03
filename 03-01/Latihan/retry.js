class MultiplicationUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicationUnitFailure('Klunk')
  }
}

function reliableMultiply(a, b) {
  for (;;) {
    try {
      return primitiveMultiply(a, b);
    } catch (e) {
      if (!(e instanceof MultiplicationUnitFailure))
      throw e;
    }
  }
}

console.log(reliableMultiply(8, 7))