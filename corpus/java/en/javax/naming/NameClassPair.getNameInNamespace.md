---
id: "java-en-function-nameclasspair-getnameinnamespace"
language: "java"
lang: "en"
category: "function"
name: "NameClassPair.getNameInNamespace"
signature: "public String getNameInNamespace()"
title: "NameClassPair.getNameInNamespace"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/NameClassPair.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NameClassPair.getNameInNamespace

```java
public String getNameInNamespace()
```

Retrieves the full name of this binding.
 The full name is the absolute name of this binding within
 its own namespace. See `getNameInNamespace`.
 

 In naming systems for which the notion of full name does not
 apply to this binding an `UnsupportedOperationException`
 is thrown.
 This exception is also thrown when a service provider written before
 the introduction of the method is in use.
 

 The string returned by this method is not a JNDI composite name and
 should not be passed directly to context methods.

**返回**

- The full name of this binding.

**异常**

- **UnsupportedOperationException** — if the notion of full name does not apply to this binding in the naming system.

**参见**

- #setNameInNamespace
- #getName

> *Since 1.5*
