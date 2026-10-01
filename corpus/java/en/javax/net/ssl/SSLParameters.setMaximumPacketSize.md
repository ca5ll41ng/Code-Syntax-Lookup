---
id: "java-en-function-sslparameters-setmaximumpacketsize"
language: "java"
lang: "en"
category: "function"
name: "SSLParameters.setMaximumPacketSize"
signature: "public void setMaximumPacketSize(int maximumPacketSize)"
title: "SSLParameters.setMaximumPacketSize"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLParameters.setMaximumPacketSize

```java
public void setMaximumPacketSize(int maximumPacketSize)
```

Sets the maximum expected network packet size in bytes for
 SSL/TLS/DTLS records.

           should not be less than 256 bytes so that small handshake
           messages, such as HelloVerifyRequests, are not fragmented.

           record, an implementation may attempt to generate as minimal
           records as possible.  However, this may cause a generated
           packet to be larger than the maximum packet size.

**参数**

- **maximumPacketSize** — the maximum expected network packet size in bytes, or `0` to use the implicit size that is automatically specified by the underlying implementation.

**异常**

- **IllegalArgumentException** — if `maximumPacketSize` is negative.

**参见**

- #getMaximumPacketSize()

> *Since 9*
