---
id: "java-en-function-multicastchannel-close"
language: "java"
lang: "en"
category: "function"
name: "MulticastChannel.close"
signature: "@Override void close() throws IOException"
title: "MulticastChannel.close"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/MulticastChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MulticastChannel.close

```java
@Override void close() throws IOException
```

Closes this channel.

 

 If the channel is a member of a multicast group then the membership
 is `drop dropped`. Upon return, the `MembershipKey membership-key` will be `isValid
 invalid`.

 

 This method otherwise behaves exactly as specified by the `Channel` interface.

**异常**

- **IOException** — If an I/O error occurs
