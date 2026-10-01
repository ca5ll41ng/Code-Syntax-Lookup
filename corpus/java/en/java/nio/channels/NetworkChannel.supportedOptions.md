---
id: "java-en-function-networkchannel-supportedoptions"
language: "java"
lang: "en"
category: "function"
name: "NetworkChannel.supportedOptions"
signature: "Set<SocketOption<?>> supportedOptions()"
title: "NetworkChannel.supportedOptions"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/NetworkChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NetworkChannel.supportedOptions

```java
Set<SocketOption<?>> supportedOptions()
```

Returns a set of the socket options supported by this channel.

 

 This method will continue to return the set of options even after the
 channel has been closed.

**返回**

- A set of the socket options supported by this channel
