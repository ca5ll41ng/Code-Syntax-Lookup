---
id: "java-en-function-gsscontext-dispose"
language: "java"
lang: "en"
category: "function"
name: "GSSContext.dispose"
signature: "void dispose() throws GSSException"
title: "GSSContext.dispose"
directive: "method"
module: "java.security.jgss/org.ietf.jgss"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/org/ietf/jgss/GSSContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GSSContext.dispose

```java
void dispose() throws GSSException
```

Releases any system resources and cryptographic information stored in
 the context object and invalidates the context.

**异常**

- **GSSException** — containing the following major error codes: `FAILURE GSSException.FAILURE`
