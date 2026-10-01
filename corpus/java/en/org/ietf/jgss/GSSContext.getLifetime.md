---
id: "java-en-function-gsscontext-getlifetime"
language: "java"
lang: "en"
category: "function"
name: "GSSContext.getLifetime"
signature: "int getLifetime()"
title: "GSSContext.getLifetime"
directive: "method"
module: "java.security.jgss/org.ietf.jgss"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/org/ietf/jgss/GSSContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GSSContext.getLifetime

```java
int getLifetime()
```

Determines what the remaining lifetime for this
 context is. It can be called by both the context initiator and the
 context acceptor, but for a definitive answer it should be called
 only after `isEstablished() isEstablished` returns
 true.

**返回**

- the remaining lifetime in seconds

**参见**

- #requestLifetime(int)
