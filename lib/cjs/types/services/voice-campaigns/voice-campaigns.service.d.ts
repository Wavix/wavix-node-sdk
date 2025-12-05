import ServiceBase from "../service.base";
import { TriggerScenarioPayload, TriggerScenarioResponse } from "./voice-campaigns.interface";
declare class VoiceCampaigns extends ServiceBase {
    triggerScenario(payload: TriggerScenarioPayload): Promise<ErrorResponse | TriggerScenarioResponse>;
}
export { VoiceCampaigns };
//# sourceMappingURL=voice-campaigns.service.d.ts.map