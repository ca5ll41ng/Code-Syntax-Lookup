---
id: "java-en-function-mac-clone"
language: "java"
lang: "en"
category: "function"
name: "Mac.clone"
signature: "public final Object clone() throws CloneNotSupportedException"
title: "Mac.clone"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/Mac.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Mac.clone

```java
public final Object clone() throws CloneNotSupportedException
```

Returns a clone if the provider implementation is cloneable.

**返回**

- a clone if the provider implementation is cloneable.

**异常**

- **CloneNotSupportedException** — if this is called on a delegate that does not support `Cloneable`.
