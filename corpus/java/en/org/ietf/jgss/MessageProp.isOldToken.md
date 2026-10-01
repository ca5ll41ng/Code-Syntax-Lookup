---
id: "java-en-function-messageprop-isoldtoken"
language: "java"
lang: "en"
category: "function"
name: "MessageProp.isOldToken"
signature: "public boolean isOldToken()"
title: "MessageProp.isOldToken"
directive: "method"
module: "java.security.jgss/org.ietf.jgss"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/org/ietf/jgss/MessageProp.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MessageProp.isOldToken

```java
public boolean isOldToken()
```

Tests if this token's validity period has expired, i.e., the token
 is too old to be checked for duplication.

**返回**

- true if the token's validity period has expired, false otherwise.
