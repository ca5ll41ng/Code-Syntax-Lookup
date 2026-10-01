---
id: "java-en-function-nameclasspair-getclassname"
language: "java"
lang: "en"
category: "function"
name: "NameClassPair.getClassName"
signature: "public String getClassName()"
title: "NameClassPair.getClassName"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/NameClassPair.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NameClassPair.getClassName

```java
public String getClassName()
```

Retrieves the class name of the object bound to the name of this binding.
 If a reference or some other indirect information is bound,
 retrieves the class name of the eventual object that
 will be returned by `Binding.getObject()`.

**返回**

- The possibly null class name of object bound. It is null if the object bound is null.

**参见**

- Binding#getObject
- Binding#getClassName
- #setClassName
