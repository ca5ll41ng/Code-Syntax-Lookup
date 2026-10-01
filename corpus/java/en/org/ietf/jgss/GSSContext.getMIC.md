---
id: "java-en-function-gsscontext-getmic"
language: "java"
lang: "en"
category: "function"
name: "GSSContext.getMIC"
signature: "byte[] getMIC(byte[] inMsg, int offset, int len, MessageProp msgProp) throws GSSException"
title: "GSSContext.getMIC"
directive: "method"
module: "java.security.jgss/org.ietf.jgss"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/org/ietf/jgss/GSSContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GSSContext.getMIC

```java
byte[] getMIC(byte[] inMsg, int offset, int len, MessageProp msgProp) throws GSSException
```

Returns a token containing a cryptographic Message Integrity Code
 (MIC) for the supplied message,  for transfer to the peer
 application.  Unlike wrap, which encapsulates the user message in the
 returned token, only the message MIC is returned in the output
 token.

 Note that privacy can only be applied through the wrap call.

 Since some application-level protocols may wish to use tokens emitted
 by getMIC to provide "secure framing", implementations should support
 derivation of MICs from zero-length messages.

**参数**

- **inMsg** — the message to generate the MIC over.
- **offset** — offset within the inMsg where the message begins.
- **len** — the length of the message
- **msgProp** — an instance of MessageProp that is used by the application to set the desired QOP.  Set the desired QOP to 0 in msgProp to request the default QOP. Alternatively pass in null for msgProp to request the default QOP.

**返回**

- a byte[] containing the token to be sent to the peer.

**异常**

- **GSSException** — containing the following major error codes: `CONTEXT_EXPIRED GSSException.CONTEXT_EXPIRED`, `BAD_QOP GSSException.BAD_QOP`, `FAILURE GSSException.FAILURE`
