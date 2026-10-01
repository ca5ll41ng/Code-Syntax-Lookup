---
id: "java-en-function-sslparameters-getmaximumpacketsize"
language: "java"
lang: "en"
category: "function"
name: "SSLParameters.getMaximumPacketSize"
signature: "public int getMaximumPacketSize()"
title: "SSLParameters.getMaximumPacketSize"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLParameters.getMaximumPacketSize

```java
public int getMaximumPacketSize()
```

Returns the maximum expected network packet size in bytes for
 SSL/TLS/DTLS records.

           for a DTLS protocols implementation.

           should calculate and specify the implicit value of the
           maximum expected network packet size if it is not
           configured explicitly.  For any connection populated
           object, this method should never return `0` so
           that applications can retrieve the actual implicit size
           of the underlying implementation.
           

           An implementation should attempt to comply with the maximum
           packet size configuration.  However, if the maximum packet
           size is too small to hold a minimal record, an implementation
           may try to generate as minimal records as possible.  This
           may cause a generated packet to be larger than the maximum
           packet size.

**返回**

- the maximum expected network packet size, or `0` if use the implicit size that is automatically specified by the underlying implementation and this object has not been populated by any connection.

**参见**

- #setMaximumPacketSize(int)

> *Since 9*
