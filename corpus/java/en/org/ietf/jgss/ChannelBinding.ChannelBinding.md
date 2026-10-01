---
id: "java-en-function-channelbinding-channelbinding"
language: "java"
lang: "en"
category: "function"
name: "ChannelBinding.ChannelBinding"
signature: "public ChannelBinding(InetAddress initAddr, InetAddress acceptAddr, byte[] appData)"
title: "ChannelBinding.ChannelBinding"
directive: "method"
module: "java.security.jgss/org.ietf.jgss"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/org/ietf/jgss/ChannelBinding.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ChannelBinding.ChannelBinding

```java
public ChannelBinding(InetAddress initAddr, InetAddress acceptAddr, byte[] appData)
```

Create a ChannelBinding object with user supplied address information
 and data.  null values can be used for any fields which the
 application does not want to specify.

**参数**

- **initAddr** — the address of the context initiator. null value can be supplied to indicate that the application does not want to set this value.
- **acceptAddr** — the address of the context acceptor. null value can be supplied to indicate that the application does not want to set this value.
- **appData** — application supplied data to be used as part of the channel bindings. null value can be supplied to indicate that the application does not want to set this value.
