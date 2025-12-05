"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DidDocumentId = exports.DidDestinationTransport = void 0;
var DidDestinationTransport;
(function (DidDestinationTransport) {
    DidDestinationTransport[DidDestinationTransport["SipURI"] = 1] = "SipURI";
    DidDestinationTransport[DidDestinationTransport["PSTN"] = 4] = "PSTN";
    DidDestinationTransport[DidDestinationTransport["SIPTrunk"] = 5] = "SIPTrunk";
})(DidDestinationTransport || (exports.DidDestinationTransport = DidDestinationTransport = {}));
var DidDocumentId;
(function (DidDocumentId) {
    DidDocumentId[DidDocumentId["Id"] = 1] = "Id";
    DidDocumentId[DidDocumentId["Address"] = 2] = "Address";
    DidDocumentId[DidDocumentId["LocalAddress"] = 3] = "LocalAddress";
})(DidDocumentId || (exports.DidDocumentId = DidDocumentId = {}));
