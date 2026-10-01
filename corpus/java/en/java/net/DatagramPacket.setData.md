---
id: "java-en-function-datagrampacket-setdata"
language: "java"
lang: "en"
category: "function"
name: "DatagramPacket.setData"
signature: "public synchronized void setData(byte[] buf, int offset, int length)"
title: "DatagramPacket.setData"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/DatagramPacket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatagramPacket.setData

```java
public synchronized void setData(byte[] buf, int offset, int length)
```

Set the data buffer for this packet. This sets the
 data, length and offset of the packet.

**参数**

- **buf** — the buffer to set for this packet
- **offset** — the offset into the data
- **length** — the length of the data and/or the length of the buffer used to receive data

**异常**

- **IllegalArgumentException** — if the length or offset is negative, or if the length plus the offset is greater than the length of the packet's given buffer.

**参见**

- #getData
- #getOffset
- #getLength

> *Since 1.2*
