---
id: "java-en-function-gsscontext-getwrapsizelimit"
language: "java"
lang: "en"
category: "function"
name: "GSSContext.getWrapSizeLimit"
signature: "int getWrapSizeLimit(int qop, boolean confReq, int maxTokenSize) throws GSSException"
title: "GSSContext.getWrapSizeLimit"
directive: "method"
module: "java.security.jgss/org.ietf.jgss"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/org/ietf/jgss/GSSContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GSSContext.getWrapSizeLimit

```java
int getWrapSizeLimit(int qop, boolean confReq, int maxTokenSize) throws GSSException
```

Used to determine limits on the size of the message
 that can be passed to wrap. Returns the maximum
 message size that, if presented to the wrap method with
 the same confReq and qop parameters, will
 result in an output token containing no more
 than maxTokenSize bytes.

 This call is intended for use by applications that communicate over
 protocols that impose a maximum message size.  It enables the
 application to fragment messages prior to applying protection.

 GSS-API implementations are recommended but not required to detect
 invalid QOP values when getWrapSizeLimit is called.
 This routine guarantees only a maximum message size, not the
 availability of specific QOP values for message protection.

**参数**

- **qop** — the level of protection wrap will be asked to provide.
- **confReq** — true if wrap will be asked to provide privacy, false  otherwise.
- **maxTokenSize** — the desired maximum size of the token emitted by wrap.

**返回**

- the maximum size of the input token for the given output token size

**异常**

- **GSSException** — containing the following major error codes: `CONTEXT_EXPIRED GSSException.CONTEXT_EXPIRED`, `BAD_QOP GSSException.BAD_QOP`, `FAILURE GSSException.FAILURE`
