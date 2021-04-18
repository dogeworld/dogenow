import { BodyNode, el } from "@hanul/skynode";
import superagent from "superagent";

(async () => {

    let upbitDisplay;
    let binanceDisplay;

    el(".content",
        el("h1", "도지나우 - 도지코인 현재가격 모든 거래소 정보"),
        upbitDisplay = el(".price-display"),
        binanceDisplay = el(".price-display"),
        el("a.madeby-button", { href: "https://dogeworld.dog" },
            el("img", { src: "/images/madeby.png", width: "300" }),
            el("img", { src: "/images/bottom.png", width: "300" }),
        ),
    ).appendTo(BodyNode);

    const upbitData = await superagent.get("https://crix-api-endpoint.upbit.com/v1/crix/candles/days/?code=CRIX.UPBIT.KRW-DOGE");
    upbitDisplay.append(el("span.exchange", "업비트"), el("span.price", `${upbitData.body[0].tradePrice} 원`));

    const binanceData = await superagent.get("https://sochain.com/api/v2/get_price/DOGE/USD");
    binanceDisplay.append(el("span.exchange", "Binance"), el("span.price", `${binanceData.body.data.prices[0].price} 달러`));
})();