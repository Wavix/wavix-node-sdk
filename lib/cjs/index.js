"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("./services");
class Wavix {
    constructor(options) {
        this.call = new services_1.Call(options);
        this.numberValidation = new services_1.NumberValidation(options);
        this.cdr = new services_1.Cdr(options);
        this.profile = new services_1.Profile(options);
        this.speechAnalytics = new services_1.SpeechAnalytics(options);
        this.billing = new services_1.Billing(options);
        this.cart = new services_1.Cart(options);
        this.buy = new services_1.Buy(options);
        this.did = new services_1.Did(options);
        this.voiceCampaigns = new services_1.VoiceCampaigns(options);
        this.sipTrunk = new services_1.SipTrunk(options);
        this.smsAndMms = new services_1.SmsAndMms(options);
        this.twoFa = new services_1.TwoFa(options);
        this.linkShortener = new services_1.LinkShortener(options);
        this.e911 = new services_1.E911(options);
    }
    get version() {
        return process.env.npm_package_version || "0.0.0";
    }
}
exports.default = Wavix;
