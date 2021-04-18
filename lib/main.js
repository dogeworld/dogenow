"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const superagent_1 = __importDefault(require("superagent"));
(async () => {
    let upbitDisplay;
    let gopaxDisplay;
    let binanceDisplay;
    skynode_1.el(".content", skynode_1.el("h1", "도지나우 - 도지코인 현재가격 모든 거래소 정보"), upbitDisplay = skynode_1.el(".price-display", skynode_1.el("span.exchange", "업비트")), gopaxDisplay = skynode_1.el(".price-display", skynode_1.el("span.exchange", "고팍스")), binanceDisplay = skynode_1.el(".price-display", skynode_1.el("span.exchange", "Binance")), skynode_1.el("a.madeby-button", { href: "https://dogeworld.dog" }, skynode_1.el("img", { src: "/images/madeby.png", width: "300" }), skynode_1.el("img", { src: "/images/bottom.png", width: "300" }))).appendTo(skynode_1.BodyNode);
    const refresh = () => {
        (async () => {
            const upbitData = await superagent_1.default.get("https://crix-api-endpoint.upbit.com/v1/crix/candles/days/?code=CRIX.UPBIT.KRW-DOGE");
            upbitDisplay.empty().append(skynode_1.el("span.exchange", "업비트"), skynode_1.el("span.price", `${upbitData.body[0].tradePrice} 원`));
        })();
        (async () => {
            const gopaxData = await superagent_1.default.get("https://dogeworlddog.wixsite.com/apis/_functions/gopax");
            gopaxDisplay.empty().append(skynode_1.el("span.exchange", "고팍스"), skynode_1.el("span.price", `${JSON.parse(gopaxData.body.text).price} 원`));
        })();
        (async () => {
            const binanceData = await superagent_1.default.get("https://sochain.com/api/v2/get_price/DOGE/USD");
            binanceDisplay.empty().append(skynode_1.el("span.exchange", "Binance"), skynode_1.el("span.price", `${binanceData.body.data.prices[0].price} 달러`));
        })();
    };
    refresh();
    setInterval(refresh, 1000);
})();
//# sourceMappingURL=main.js.map