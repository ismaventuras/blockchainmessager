import {utils} from "ethers";

export function convertToUtf8Bytes(value:string){
    return utils.hexlify(utils.toUtf8Bytes(value))
}