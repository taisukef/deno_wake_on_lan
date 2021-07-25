import { wakeOnLAN } from "./wakeOnLAN.js";

const mac = 'xx:xx:xx:xx:xx:xx';
await wakeOnLAN(mac, { address: "192.168.1.xx" }); // ok
//wake(mac, { address: "192.168.255.255" }); // NG
//await wake(mac); // PermissionDenied, can't broadcast in Deno 1.12.1
