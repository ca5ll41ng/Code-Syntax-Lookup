---
id: "java-en-function-nameclasspair-getname"
language: "java"
lang: "en"
category: "function"
name: "NameClassPair.getName"
signature: "public String getName()"
title: "NameClassPair.getName"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/NameClassPair.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NameClassPair.getName

```java
public String getName()
```

Retrieves the name of this binding.
 If `isRelative()` is true, this name is relative to the
 target context (which is named by the first parameter of the
 `list()`).
 If `isRelative()` is false, this name is a URL string.

**返回**

- The non-null name of this binding.

**参见**

- #isRelative
- #setName
