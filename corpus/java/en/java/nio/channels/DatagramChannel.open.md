---
id: "java-en-function-datagramchannel-open"
language: "java"
lang: "en"
category: "function"
name: "DatagramChannel.open"
signature: "public static DatagramChannel open() throws IOException"
title: "DatagramChannel.open"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/DatagramChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatagramChannel.open

```java
public static DatagramChannel open() throws IOException
```

Opens a datagram channel.

 

 The new channel is created by invoking the `openDatagramChannel()
 openDatagramChannel` method of the system-wide default `java.nio.channels.spi.SelectorProvider` object.  The channel will not be
 connected.

 

 The `ProtocolFamily ProtocolFamily` of the channel's socket
 is platform (and possibly configuration) dependent and therefore unspecified.
 The `open(ProtocolFamily) open` allows the protocol family to be
 selected when opening a datagram channel, and should be used to open
 datagram channels that are intended for Internet Protocol multicasting.

**返回**

- A new datagram channel

**异常**

- **IOException** — If an I/O error occurs

**参见**

- java.net.preferIPv4Stack system property
