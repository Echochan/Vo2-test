export async function asyncFunctionErrorCapture(asyncFn, ...args) {
  try {
    const res = await asyncFn(...args)
    return { res }
  } catch (err) {
    console.log('asyncFunctionErrorCaptureor', err)
    return { err }
  }
}