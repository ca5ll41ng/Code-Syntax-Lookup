---
id: "java-en-function-nameclasspair-nameclasspair"
language: "java"
lang: "en"
category: "function"
name: "NameClassPair.NameClassPair"
signature: "public NameClassPair(String name, String className)"
title: "NameClassPair.NameClassPair"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/NameClassPair.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NameClassPair.NameClassPair

```java
public NameClassPair(String name, String className)
```

Constructs an instance of a NameClassPair given its
 name and class name.

**参数**

- **name** — The non-null name of the object. It is relative to the target context (which is named by the first parameter of the list() method)
- **className** — The possibly null class name of the object bound to name. It is null if the object bound is null.

**参见**

- #getClassName
- #setClassName
- #getName
- #setName
