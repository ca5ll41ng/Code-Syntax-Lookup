---
id: "java-en-function-datagramchannel-disconnect"
language: "java"
lang: "en"
category: "function"
name: "DatagramChannel.disconnect"
signature: "public abstract DatagramChannel disconnect() throws IOException"
title: "DatagramChannel.disconnect"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/DatagramChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatagramChannel.disconnect

```java
public abstract DatagramChannel disconnect() throws IOException
```

Disconnects this channel's socket.

 

 The channel's socket is configured so that it can receive datagrams
 from, and sends datagrams to, any remote address.

 

 This method may be invoked at any time.  If another thread has
 already initiated a read or write operation upon this channel, then an
 invocation of this method will block until any such operation is
 complete.

 

 If this channel's socket is not connected, or if the channel is
 closed, then invoking this method has no effect.  

 may be left in an unspecified state. It is strongly recommended that
 the channel be closed when disconnect fails.

**返回**

- This datagram channel

**异常**

- **IOException** — If some other I/O error occurs
