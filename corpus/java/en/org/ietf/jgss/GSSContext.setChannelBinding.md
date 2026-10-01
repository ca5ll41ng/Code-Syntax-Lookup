---
id: "java-en-function-gsscontext-setchannelbinding"
language: "java"
lang: "en"
category: "function"
name: "GSSContext.setChannelBinding"
signature: "void setChannelBinding(ChannelBinding cb) throws GSSException"
title: "GSSContext.setChannelBinding"
directive: "method"
module: "java.security.jgss/org.ietf.jgss"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/org/ietf/jgss/GSSContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GSSContext.setChannelBinding

```java
void setChannelBinding(ChannelBinding cb) throws GSSException
```

Sets the channel bindings to be used during context
 establishment. This method can be called on both
 the context initiator's and the context acceptor's side, but it must
 be called before context establishment begins. This means that an
 initiator must call it before the first call to
 initSecContext and the acceptor must call it before the
 first call to acceptSecContext.

**参数**

- **cb** — the channel bindings to use.

**异常**

- **GSSException** — containing the following major error codes: `FAILURE GSSException.FAILURE`
