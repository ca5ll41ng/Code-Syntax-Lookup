---
id: "java-en-function-datagrampacket-setlength"
language: "java"
lang: "en"
category: "function"
name: "DatagramPacket.setLength"
signature: "public synchronized void setLength(int length)"
title: "DatagramPacket.setLength"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/DatagramPacket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatagramPacket.setLength

```java
public synchronized void setLength(int length)
```

Set the length for this packet. The length of the packet is
 the number of bytes from the packet's data buffer that will be
 sent, or the number of bytes of the packet's data buffer that
 will be used for receiving data. The `length` plus the
 `getOffset() offset` must be lesser or equal to the
 length of the packet's data buffer.

**参数**

- **length** — the length to set for this packet.

**异常**

- **IllegalArgumentException** — if the length is negative, or if the length plus the offset is greater than the length of the packet's data buffer.

**参见**

- #getLength
- #setData

> *Since 1.1*
