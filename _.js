const _ = {
    clamp(number,lower,upper) {
        return Math.max(lower,Math.min(upper,number))
    },
    inRange(number,start,end) {
        //make start=0, end=start, per specification
        if(!end) {
            end=start
            start=0
        }
        // swap end and start, per specification
        if(end<start) {
            let temp = end
            end = start
            start = temp
        }
        if(number<start||number>=end) {
            return false
        }
        return true
    },
    words(string,pattern=' ') {
        let wordArr = string.split(pattern)
        return wordArr
    },
    pad(string,length=string.length,chars=' ') {
        let padding = length-string.length
        if(padding<=0) {
            return string
        }
        let startpad = Math.floor(padding/2)
        let endpad = padding - startpad
        let resultString
        resultString = string.padEnd(endpad+string.length,chars)
        resultString = resultString.padStart(startpad+resultString.length,chars)
        return resultString
    },
    // .has is only implemented for testing key existence, not path existence
    has(obj,key) {
        return obj ? hasOwnProperty.call(obj, key) : false;
    },
    invert(obj) {
        const keys = Object.keys(obj)
        const values = Object.values(obj)
        let resultObj = {}
        for(let i = 0;i<keys.length;i++) {
            resultObj[values[i]] = keys[i]
        }
        return resultObj
    },
    findKey(obj, predicate) {
        for(let key in obj) {
            let predicateVal = predicate(obj[key])
            if(predicateVal) {
                return key
            }
        }
        return undefined
    },
    drop(array, n=1) {
        return array.slice(n)
    },
    dropWhile(array, predicate) {
        for(let i=0; i<array.length; i++) {
            let predicateVal = predicate(array[i],i,array)
            if(!predicateVal) {
                return array.slice(i)
            }
        }
    },
    chunk(array, size=1) {
        if(size<=0) return undefined
        let resultArray = []
        let index = 0
        while(index<array.length) {
            resultArray.push(array.slice(index,index+size))
            index += size
        }
        return resultArray
    }
}






// Do not write or modify code below this line.
module.exports = _;