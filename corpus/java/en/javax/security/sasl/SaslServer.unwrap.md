---
id: "java-en-function-saslserver-unwrap"
language: "java"
lang: "en"
category: "function"
name: "SaslServer.unwrap"
signature: "public abstract byte[] unwrap(byte[] incoming, int offset, int len) throws SaslException"
title: "SaslServer.unwrap"
directive: "method"
module: "java.security.sasl/javax.security.sasl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.sasl/javax/security/sasl/SaslServer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SaslServer.unwrap

```java
public abstract byte[] unwrap(byte[] incoming, int offset, int len) throws SaslException
```

Unwraps a byte array received from the client.
 This method can be called only after the authentication exchange has
 completed (i.e., when `isComplete()` returns true) and only if
 the authentication exchange has negotiated integrity and/or privacy
 as the quality of protection; otherwise,
 an `IllegalStateException` is thrown.
 

 `incoming` is the contents of the SASL buffer as defined in RFC 2222
 without the leading four octet field that represents the length.
 `offset` and `len` specify the portion of `incoming`
 to use.

**参数**

- **incoming** — A non-null byte array containing the encoded bytes from the client.
- **offset** — The starting position at `incoming` of the bytes to use.
- **len** — The number of bytes from `incoming` to use.

**返回**

- A non-null byte array containing the decoded bytes.

**异常**

- **SaslException** — if `incoming` cannot be successfully unwrapped.
- **IllegalStateException** — if the authentication exchange has not completed, or if the negotiated quality of protection has neither integrity nor privacy
