---
id: "java-en-function-gsscontext-isestablished"
language: "java"
lang: "en"
category: "function"
name: "GSSContext.isEstablished"
signature: "boolean isEstablished()"
title: "GSSContext.isEstablished"
directive: "method"
module: "java.security.jgss/org.ietf.jgss"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/org/ietf/jgss/GSSContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GSSContext.isEstablished

```java
boolean isEstablished()
```

Used during context establishment to determine the state of the
 context.

**返回**

- true if this is a fully established context on the caller's side and no more tokens are needed from the peer.
