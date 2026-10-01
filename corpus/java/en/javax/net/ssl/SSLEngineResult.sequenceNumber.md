---
id: "java-en-function-sslengineresult-sequencenumber"
language: "java"
lang: "en"
category: "function"
name: "SSLEngineResult.sequenceNumber"
signature: "public final long sequenceNumber()"
title: "SSLEngineResult.sequenceNumber"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLEngineResult.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLEngineResult.sequenceNumber

```java
public final long sequenceNumber()
```

Returns the sequence number of the produced or consumed SSL/TLS/DTLS
 record (optional operation).

           exceed `-1L`.  It is desired to use the unsigned
           long comparing mode for comparison of unsigned long values
           (see also `compareUnsigned(long, long)
           Long.compareUnsigned`).
           

           For DTLS protocols, the first 16 bits of the sequence
           number is a counter value (epoch) that is incremented on
           every cipher state change.  The remaining 48 bits on the
           right side of the sequence number represents the sequence
           of the record, which is maintained separately for each epoch.

           sequence number incremented to `-1L`.  If the sequence
           number is close to wrapping, renegotiate should be requested,
           otherwise the connection should be closed immediately.
           This should be carried on automatically by the underlying
           implementation.

**返回**

- the sequence number of the produced or consumed SSL/TLS/DTLS record; or `-1L` if no record is produced or consumed, or this operation is not supported by the underlying provider

**参见**

- java.lang.Long#compareUnsigned(long, long)

> *Since 9*
