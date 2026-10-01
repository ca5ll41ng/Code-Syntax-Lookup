---
id: "java-en-function-gsscontext-wrap"
language: "java"
lang: "en"
category: "function"
name: "GSSContext.wrap"
signature: "byte[] wrap(byte inBuf[], int offset, int len, MessageProp msgProp) throws GSSException"
title: "GSSContext.wrap"
directive: "method"
module: "java.security.jgss/org.ietf.jgss"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/org/ietf/jgss/GSSContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GSSContext.wrap

```java
byte[] wrap(byte inBuf[], int offset, int len, MessageProp msgProp) throws GSSException
```

Applies per-message security services over the established security
 context. The method will return a token with the
 application supplied data and a cryptographic MIC over it.
 The data may be encrypted if confidentiality (privacy) was
 requested.

 The MessageProp object is instantiated by the application and used
 to specify a QOP value which selects cryptographic algorithms, and a
 privacy service to optionally encrypt the message.  The underlying
 mechanism that is used in the call may not be able to provide the
 privacy service.  It sets the actual privacy service that it does
 provide in this MessageProp object which the caller should then
 query upon return.  If the mechanism is not able to provide the
 requested QOP, it throws a GSSException with the BAD_QOP code.

 Since some application-level protocols may wish to use tokens
 emitted by wrap to provide "secure framing", implementations should
 support the wrapping of zero-length messages.

 The application will be responsible for sending the token to the
 peer.

**参数**

- **inBuf** — application data to be protected.
- **offset** — the offset within the inBuf where the data begins.
- **len** — the length of the data
- **msgProp** — instance of MessageProp that is used by the application to set the desired QOP and privacy state. Set the desired QOP to 0 to request the default QOP. Upon return from this method, this object will contain the actual privacy state that was applied to the message by the underlying mechanism.

**返回**

- a byte[] containing the token to be sent to the peer.

**异常**

- **GSSException** — containing the following major error codes: `CONTEXT_EXPIRED GSSException.CONTEXT_EXPIRED`, `BAD_QOP GSSException.BAD_QOP`, `FAILURE GSSException.FAILURE`
