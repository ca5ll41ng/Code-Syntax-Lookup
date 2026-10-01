---
id: "java-en-function-gsscontext-gettargname"
language: "java"
lang: "en"
category: "function"
name: "GSSContext.getTargName"
signature: "GSSName getTargName() throws GSSException"
title: "GSSContext.getTargName"
directive: "method"
module: "java.security.jgss/org.ietf.jgss"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/org/ietf/jgss/GSSContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GSSContext.getTargName

```java
GSSName getTargName() throws GSSException
```

Returns the name of the context acceptor. This call is valid only
 after one of `isProtReady() isProtReady` or `isEstablished() isEstablished` return true.

**返回**

- a GSSName that is an MN containing the name of the context acceptor.

**异常**

- **GSSException** — containing the following major error codes: `FAILURE GSSException.FAILURE`
