import { DividendCalc as DC } from "./divcal"
class Startup {
    public static main(): void {
        var dc = new DC(12.5 , 200);
        document.body.innerHTML = dc.ToString();
    }
}

Startup.main();