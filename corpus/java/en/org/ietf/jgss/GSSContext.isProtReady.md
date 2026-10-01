---
id: "java-en-function-gsscontext-isprotready"
language: "java"
lang: "en"
category: "function"
name: "GSSContext.isProtReady"
signature: "boolean isProtReady()"
title: "GSSContext.isProtReady"
directive: "method"
module: "java.security.jgss/org.ietf.jgss"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/org/ietf/jgss/GSSContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GSSContext.isProtReady

```java
boolean isProtReady()
```

Determines if the context is ready for per message operations to be
 used over it.  Some mechanisms may allow the usage of the
 per-message operations before the context is fully established.

**返回**

- true if methods like wrap, unwrap, getMIC, and verifyMIC can be used with this context at the current stage of context establishment, false otherwise.
