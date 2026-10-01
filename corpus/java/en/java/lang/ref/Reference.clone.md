---
id: "java-en-function-reference-clone"
language: "java"
lang: "en"
category: "function"
name: "Reference.clone"
signature: "protected Object clone() throws CloneNotSupportedException"
title: "Reference.clone"
directive: "method"
module: "java.base/java.lang.ref"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ref/Reference.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Reference.clone

```java
protected Object clone() throws CloneNotSupportedException
```

Throws `CloneNotSupportedException`. A `Reference` cannot be
 meaningfully cloned. Construct a new `Reference` instead.

**返回**

- never returns normally

**异常**

- **CloneNotSupportedException** — always
