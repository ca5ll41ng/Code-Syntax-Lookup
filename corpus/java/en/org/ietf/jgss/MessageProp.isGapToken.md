---
id: "java-en-function-messageprop-isgaptoken"
language: "java"
lang: "en"
category: "function"
name: "MessageProp.isGapToken"
signature: "public boolean isGapToken()"
title: "MessageProp.isGapToken"
directive: "method"
module: "java.security.jgss/org.ietf.jgss"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/org/ietf/jgss/MessageProp.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MessageProp.isGapToken

```java
public boolean isGapToken()
```

Tests if an expected token was not received, i.e., one or more
 predecessor tokens have not yet been successfully processed.

**返回**

- true if an expected per-message token was not received, false otherwise.
