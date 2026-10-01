---
id: "java-en-function-nameclasspair-setnameinnamespace"
language: "java"
lang: "en"
category: "function"
name: "NameClassPair.setNameInNamespace"
signature: "public void setNameInNamespace(String fullName)"
title: "NameClassPair.setNameInNamespace"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/NameClassPair.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NameClassPair.setNameInNamespace

```java
public void setNameInNamespace(String fullName)
```

Sets the full name of this binding.
 This method must be called to set the full name whenever a
 `NameClassPair` is created and a full name is
 applicable to this binding.
 

 Setting the full name to null, or not setting it at all, will
 cause `getNameInNamespace()` to throw an exception.

**参数**

- **fullName** — The full name to use.

**参见**

- #getNameInNamespace
- #setName

> *Since 1.5*
