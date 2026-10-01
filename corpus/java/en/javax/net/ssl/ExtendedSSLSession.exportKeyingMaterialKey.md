---
id: "java-en-function-extendedsslsession-exportkeyingmaterialkey"
language: "java"
lang: "en"
category: "function"
name: "ExtendedSSLSession.exportKeyingMaterialKey"
signature: "public SecretKey exportKeyingMaterialKey(String keyAlg, String label, byte[] context, int length) throws SSLKeyException"
title: "ExtendedSSLSession.exportKeyingMaterialKey"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/ExtendedSSLSession.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ExtendedSSLSession.exportKeyingMaterialKey

```java
public SecretKey exportKeyingMaterialKey(String keyAlg, String label, byte[] context, int length) throws SSLKeyException
```

Generates Exported Keying Material (EKM) calculated according to the
 algorithms defined in RFCs 5705/8446.
 

 RFC 5705 (for (D)TLSv1.2 and earlier) calculates different EKM
 values depending on whether `context` is null or non-null/empty.
 RFC 8446 (TLSv1.3) treats a null context as non-null/empty.
 

 `label` will be converted to bytes using
 the `UTF_8`
 character encoding.

     RFC 5705: Keying Material Exporters for Transport Layer
     Security (TLS)
     RFC 8446: The Transport Layer Security (TLS) Protocol Version 1.3

           `UnsupportedOperationException`.

**参数**

- **keyAlg** — the algorithm of the resultant `SecretKey` object. See the SecretKey Algorithms section in the  Java Security Standard Algorithm Names Specification for information about standard secret key algorithm names.
- **label** — the label bytes used in the EKM calculation. `label` will be converted to a `byte[]` before the operation begins.
- **context** — the context bytes used in the EKM calculation, or null
- **length** — the number of bytes of EKM material needed

**返回**

- a `SecretKey` that contains `length` bytes of the EKM material

**异常**

- **SSLKeyException** — if the key cannot be generated
- **IllegalArgumentException** — if `keyAlg` is empty, `length` is non-positive, or if the `label` or `context` length can not be accommodated
- **NullPointerException** — if `keyAlg` or `label` is null
- **IllegalStateException** — if this session does not have the necessary key generation material (for example, a session under construction during handshaking)
- **UnsupportedOperationException** — if the underlying provider does not implement the operation

> *Since 25*
