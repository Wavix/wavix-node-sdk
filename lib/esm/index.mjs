import { Billing, Buy, Call, Cart, Cdr, Did, LinkShortener, NumberValidation, Profile, SpeechAnalytics, E911, TwoFa, SipTrunk, SmsAndMms, VoiceCampaigns } from "./services";
export default class Wavix {
    call;
    numberValidation;
    cdr;
    profile;
    speechAnalytics;
    billing;
    cart;
    buy;
    did;
    voiceCampaigns;
    sipTrunk;
    smsAndMms;
    twoFa;
    linkShortener;
    e911;
    constructor(options) {
        this.call = new Call(options);
        this.numberValidation = new NumberValidation(options);
        this.cdr = new Cdr(options);
        this.profile = new Profile(options);
        this.speechAnalytics = new SpeechAnalytics(options);
        this.billing = new Billing(options);
        this.cart = new Cart(options);
        this.buy = new Buy(options);
        this.did = new Did(options);
        this.voiceCampaigns = new VoiceCampaigns(options);
        this.sipTrunk = new SipTrunk(options);
        this.smsAndMms = new SmsAndMms(options);
        this.twoFa = new TwoFa(options);
        this.linkShortener = new LinkShortener(options);
        this.e911 = new E911(options);
    }
    get version() {
        return process.env.npm_package_version || "0.0.0";
    }
}
