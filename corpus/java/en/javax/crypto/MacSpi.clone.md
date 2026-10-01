---
id: "java-en-function-macspi-clone"
language: "java"
lang: "en"
category: "function"
name: "MacSpi.clone"
signature: "public Object clone() throws CloneNotSupportedException"
title: "MacSpi.clone"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/MacSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MacSpi.clone

```java
public Object clone() throws CloneNotSupportedException
```

Returns a clone if the implementation is cloneable.

**返回**

- a clone if the implementation is cloneable.

**异常**

- **CloneNotSupportedException** — if this is called on an implementation that does not support `Cloneable`.
