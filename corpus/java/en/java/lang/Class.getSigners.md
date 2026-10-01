---
id: "java-en-function-class-getsigners"
language: "java"
lang: "en"
category: "function"
name: "Class.getSigners"
signature: "public Object[] getSigners()"
title: "Class.getSigners"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Class.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Class.getSigners

```java
public Object[] getSigners()
```

Gets the signers of this class.

**返回**

- the signers of this class, or null if there are no signers.  In particular, this method returns null if this `Class` object represents a primitive type or void.

> *Since 1.1*
