// Based on ethers.providers.ExternalProvider
export type EthereumProvider = {
    isMetaMask?: boolean;
    isStatus?: boolean;
    host?: string;
    path?: string;
    sendAsync?: (request: { method: string, params?: Array<any> }, callback: (error: any, response: any) => void) => void
    //send?: (request: { method: string, params?: Array<any> }, callback: (error: any, response: any) => void) => void
    send?: (request: { method: string, params?: Array<any>|any }, callback: (error: any, response: any) => void) => void
    //request?: (request: { method: string, params?: Array<any> }) => Promise<any>
    request?: (request: { method: string, params?: Array<any>|any }) => Promise<any>
}
