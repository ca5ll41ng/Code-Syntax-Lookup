---
id: "java-en-function-messagedigest-clone"
language: "java"
lang: "en"
category: "function"
name: "MessageDigest.clone"
signature: "public Object clone() throws CloneNotSupportedException"
title: "MessageDigest.clone"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/MessageDigest.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MessageDigest.clone

```java
public Object clone() throws CloneNotSupportedException
```

Returns a clone if the implementation is cloneable.

**返回**

- a clone if the implementation is cloneable.

**异常**

- **CloneNotSupportedException** — if this is called on an implementation that does not support `Cloneable`.
