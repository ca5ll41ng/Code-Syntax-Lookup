---
id: "java-en-function-channelbinding-getinitiatoraddress"
language: "java"
lang: "en"
category: "function"
name: "ChannelBinding.getInitiatorAddress"
signature: "public InetAddress getInitiatorAddress()"
title: "ChannelBinding.getInitiatorAddress"
directive: "method"
module: "java.security.jgss/org.ietf.jgss"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/org/ietf/jgss/ChannelBinding.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ChannelBinding.getInitiatorAddress

```java
public InetAddress getInitiatorAddress()
```

Get the initiator's address for this channel binding.

**返回**

- the initiator's address. null is returned if the address has not been set.
