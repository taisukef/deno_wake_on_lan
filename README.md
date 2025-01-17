# Wake-on-LAN utilities for Deno

## Synopsis

To wake a machine with a given mac address do:

````js
import { wakeOnLAN } from "https://taisukef.github.io/deno_wake_on_lan/wakeOnLAN.js";

await wakeOnLAN('20:DE:20:DE:20:DE');
````

```bash
$ deno run -A --unstable wake.js
```

See [windows notes](#windows-notes)

## Reference

MAC addresses are strings and may use any separator or no separator at all:

````js
'20:DE:20:DE:20:DE'
'20-DE-20-DE-20-DE'
'20DE20DE20DE'
````

### Function wakeOnLAN()

````
wakeOnLAN(mac, [options])
````

Send a sequence of Wake-on-LAN magic packets to the given MAC address. The _options_ object may have the following properties:

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| `address` | The destination address | String | 255.255.255.255 |
| `num_packets` | The number of packets to send | Number | 3 |
| `interval` | The interval between packets in milliseconds | Number | 100 |
| `port` | The destination port to send to | Number | 9 |

### Function createMagicPacket()

````
createMagicPacket(mac)
````

Returns a buffer with a magic packet for the given MAC address.

## Windows Notes

Because windows routes global broadcasts differently from unix systems, it is necessary to specify a broadcast address manually, e.g:

````
wakeOnLAN(someMac, { address: "192.168.2.255" });
````

Use [`os.networkInterfaces()`](https://nodejs.org/api/os.html#os_os_networkinterfaces) to calculate the broadcast address dynamically. See [@mwittig's comment](https://github.com/agnat/node_wake_on_lan/issues/4#issuecomment-156404241) for further information.

## Contributors

* Jann Horn [@thejh](https://github.com/thejh)
* mh-cbon [@mh-cbon](https://github.com/mh-cbon)
* Taisuke Fukuno [@taisukef](https://github.com/taisukef)

## License (MIT)

Copyright (c) 2010 David Siegel

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
