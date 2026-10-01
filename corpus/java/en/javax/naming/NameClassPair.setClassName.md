---
id: "java-en-function-nameclasspair-setclassname"
language: "java"
lang: "en"
category: "function"
name: "NameClassPair.setClassName"
signature: "public void setClassName(String name)"
title: "NameClassPair.setClassName"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/NameClassPair.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NameClassPair.setClassName

```java
public void setClassName(String name)
```

Sets the class name of this binding.

**参数**

- **name** — the possibly null string to use as the class name. If null, `Binding.getClassName()` will return the actual class name of the object in the binding. The class name will be null if the object bound is null.

**参见**

- #getClassName
- Binding#getClassName
