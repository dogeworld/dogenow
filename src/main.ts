import { BodyNode, DomNode, el } from "@hanul/skynode";
import superagent from "superagent";

(async () => {

    let upbitDisplay: DomNode;
    let gopaxDisplay: DomNode;
    let binanceDisplay: DomNode;

    el(".content",
        el("h1", "도지나우 - 도지코인 현재가격 모든 거래소 정보"),
        upbitDisplay = el(".price-display", el("span.exchange", "업비트")),
        gopaxDisplay = el(".price-display", el("span.exchange", "고팍스")),
        binanceDisplay = el(".price-display", el("span.exchange", "Binance")),
        el("a.madeby-button", { href: "https://dogeworld.dog" },
            el("img", { src: "/images/madeby.png", width: "300" }),
            el("img", { src: "/images/bottom.png", width: "300" }),
        ),
    ).appendTo(BodyNode);

    const refresh = () => {
        (async () => {
            const upbitData = await superagent.get("https://crix-api-endpoint.upbit.com/v1/crix/candles/days/?code=CRIX.UPBIT.KRW-DOGE");
            upbitDisplay.empty().append(el("span.exchange", "업비트"), el("span.price", `${upbitData.body[0].tradePrice} 원`));
        })();
        (async () => {
            const gopaxData = await superagent.get("https://dogeworlddog.wixsite.com/apis/_functions/gopax");
            gopaxDisplay.empty().append(el("span.exchange", "고팍스"), el("span.price", `${JSON.parse(gopaxData.body.text).price} 원`));
        })();
        (async () => {
            const binanceData = await superagent.get("https://sochain.com/api/v2/get_price/DOGE/USD");
            binanceDisplay.empty().append(el("span.exchange", "Binance"), el("span.price", `${binanceData.body.data.prices[0].price} 달러`));
        })();
    };
    refresh();
    setInterval(refresh, 1000);
})();