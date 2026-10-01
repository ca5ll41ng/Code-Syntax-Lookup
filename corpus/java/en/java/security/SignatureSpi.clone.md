---
id: "java-en-function-signaturespi-clone"
language: "java"
lang: "en"
category: "function"
name: "SignatureSpi.clone"
signature: "public Object clone() throws CloneNotSupportedException"
title: "SignatureSpi.clone"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/SignatureSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SignatureSpi.clone

```java
public Object clone() throws CloneNotSupportedException
```

Returns a clone if the implementation is cloneable.

**返回**

- a clone if the implementation is cloneable.

**异常**

- **CloneNotSupportedException** — if this is called on an implementation that does not support `Cloneable`.
