import { Billing, Buy, Call, Cart, Cdr, Did, LinkShortener, NumberValidation, Profile, SpeechAnalytics, E911, TwoFa, SipTrunk, SmsAndMms, VoiceCampaigns } from "./services";
import type { Options } from "./interface";
export type { CallEvent } from "./services";
export default class Wavix {
    call: Call;
    numberValidation: NumberValidation;
    cdr: Cdr;
    profile: Profile;
    speechAnalytics: SpeechAnalytics;
    billing: Billing;
    cart: Cart;
    buy: Buy;
    did: Did;
    voiceCampaigns: VoiceCampaigns;
    sipTrunk: SipTrunk;
    smsAndMms: SmsAndMms;
    twoFa: TwoFa;
    linkShortener: LinkShortener;
    e911: E911;
    constructor(options: Options);
    get version(): string;
}
//# sourceMappingURL=index.d.ts.map