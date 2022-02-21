
export const convertChainId = chainInDecimal => `0x${chainInDecimal.toString(16)}`

// export function convertChainId(chainInDeciaml){
//     return '0x'+(chainInDeciaml).toString(16)
// }

export const getKeyByValue = (object, value) => Object.keys(object).find(key => object[key] === value)
// export function getKeyByValue(object, value) {
//     return Object.keys(object).find(key => object[key] === value);
// }

// add mile separator to numbers
export const addCommas = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

// pass an address and return a shortened version
export const shortenAddress = address => `${address.substring(0,6)}...${address.substring(address.length-4)}`

const isContract = async (address, provider) => {
    let code = await provider.getCode(address,"latest")
    let _isContract = code === "0x" ? false : true
    return _isContract
}