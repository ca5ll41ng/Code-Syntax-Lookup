---
id: "java-en-function-sslparameters-setenableretransmissions"
language: "java"
lang: "en"
category: "function"
name: "SSLParameters.setEnableRetransmissions"
signature: "public void setEnableRetransmissions(boolean enableRetransmissions)"
title: "SSLParameters.setEnableRetransmissions"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLParameters.setEnableRetransmissions

```java
public void setEnableRetransmissions(boolean enableRetransmissions)
```

Sets whether DTLS handshake retransmissions should be enabled.

 This method only applies to DTLS.

**参数**

- **enableRetransmissions** — `true` indicates that DTLS handshake retransmissions should be enabled; `false` indicates that DTLS handshake retransmissions should be disabled

**参见**

- #getEnableRetransmissions()

> *Since 9*
