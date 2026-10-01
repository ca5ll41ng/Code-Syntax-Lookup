---
id: "java-en-function-saslserver-wrap"
language: "java"
lang: "en"
category: "function"
name: "SaslServer.wrap"
signature: "public abstract byte[] wrap(byte[] outgoing, int offset, int len) throws SaslException"
title: "SaslServer.wrap"
directive: "method"
module: "java.security.sasl/javax.security.sasl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.sasl/javax/security/sasl/SaslServer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SaslServer.wrap

```java
public abstract byte[] wrap(byte[] outgoing, int offset, int len) throws SaslException
```

Wraps a byte array to be sent to the client.
 This method can be called only after the authentication exchange has
 completed (i.e., when `isComplete()` returns true) and only if
 the authentication exchange has negotiated integrity and/or privacy
 as the quality of protection; otherwise, a `SaslException` is thrown.
 

 The result of this method
 will make up the contents of the SASL buffer as defined in RFC 2222
 without the leading four octet field that represents the length.
 `offset` and `len` specify the portion of `outgoing`
 to use.

**参数**

- **outgoing** — A non-null byte array containing the bytes to encode.
- **offset** — The starting position at `outgoing` of the bytes to use.
- **len** — The number of bytes from `outgoing` to use.

**返回**

- A non-null byte array containing the encoded bytes.

**异常**

- **SaslException** — if `outgoing` cannot be successfully wrapped.
- **IllegalStateException** — if the authentication exchange has not completed, or if the negotiated quality of protection has neither integrity nor privacy.
