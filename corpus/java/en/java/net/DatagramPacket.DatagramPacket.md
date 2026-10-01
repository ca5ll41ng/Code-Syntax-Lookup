---
id: "java-en-function-datagrampacket-datagrampacket"
language: "java"
lang: "en"
category: "function"
name: "DatagramPacket.DatagramPacket"
signature: "public DatagramPacket(byte[] buf, int offset, int length)"
title: "DatagramPacket.DatagramPacket"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/DatagramPacket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatagramPacket.DatagramPacket

```java
public DatagramPacket(byte[] buf, int offset, int length)
```

Constructs a `DatagramPacket` for receiving packets of
 length `length`, specifying an offset into the buffer.
 

 The `length` argument must be less than or equal to
 `buf.length`.

**参数**

- **buf** — buffer for holding the incoming datagram.
- **offset** — the offset for the buffer
- **length** — the number of bytes to read.

**异常**

- **IllegalArgumentException** — if the length or offset is negative, or if the length plus the offset is greater than the length of the packet's given buffer.

> *Since 1.2*
