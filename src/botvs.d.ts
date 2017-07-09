declare namespace BotVS {

    interface Exchange {
        GetName(): string
        GetLabel(): string
        GetUSDCNY(): number
        GetRate(): number
        SetRate(rate: number): void
        SetPrecision(pricePrecision: number, amountPrecision: number): void
        GetCurrency(): string
        GetTicker(): Ticker
        GetDepth(): Depth
        GetTrades(): Trade[]
        GetAccount(): Account
        GetRecords(period: number): Record[]
        Buy(price: number, count: number, ...args: any[]): number
        Sell(price: number, count: number, ...args: any[]): number
        GetOrders(): Order[]
        GetOrder(orderId: number): Order
        GetFee(): Fee
        GetMinStock(): number
        GetMinPrice(): number
        Log(type: number, orderId: number, price: number, amount: number): void
        CancelOrder(orderId: number, ...args: any[]): boolean
        Go(method: string, ...args: any[]): void
        IO(type: string, ...args: any[]): void
    }

    interface Record {
        Time: number
        Open: number
        High: number
        Low: number
        Close: number
        Volume: number
    }

    interface Ticker {
        High: number
        Low: number
        Sell: number
        Buy: number
        Last: number
        Volume: number
    }

    interface MarketOrder {
        Price: number
        Amount: number
    }

    interface Depth {
        Asks: MarketOrder[]
        Bids: MarketOrder[]
    }

    interface Trade {
        Time: number
        Price: number
        Amount: number
        Type: number
    }

    interface Account {
        Balance: number
        FrozenBalance: number
        Stocks: number
        FrozenStocks: number
    }

    interface Fee {
        Sell: number
        Buy: number
    }

    interface Order {
        Id: number
        Price: number
        Amount: number
        DealAmount: number
        Status: number
        Type: number
    }

    interface Position {
        MarginLevel: number
        Amount: number
        CanCover: number
        FrozenAmount: number
        Price: number
        Profit: number
        Type: number
        ContractType: number
    }

}

declare const ORDER_STATE_PENDING: number
declare const ORDER_STATE_CLOSED: number
declare const ORDER_STATE_CANCELED: number
declare const ORDER_TYPE_BUY: number
declare const ORDER_TYPE_SELL: number

declare const exchange: BotVS.Exchange
declare const exchanges: BotVS.Exchange[]

declare function Log(...args: any[]): void
declare function Sleep(interval: number): void
declare function LogProfit(profit: number, ...args: any[]): void
declare function LogReset(): void
declare function _C<T>(func: () => T): T
declare function _CDelay(interval: number): void
declare function _N(n: number, digit?: number): number
declare function Version(): string
declare function HttpQuery(url: string): void
declare function GetCommand(): string


declare const $: any