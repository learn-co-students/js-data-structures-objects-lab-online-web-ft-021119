// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(original, key, value) {
   return Object.assign({}, original, {[key]: value})
}

function destructivelyUpdateDriverWithKeyAndValue(original, key, value) {
   original[key] = value
   return original
}

function deleteFromDriverByKey(original, key) {
   let newDriver = Object.assign({}, original)
   delete newDriver[key]
   return newDriver
}

function destructivelyDeleteFromDriverByKey(original, key) {
   delete original[key]
   return original
}