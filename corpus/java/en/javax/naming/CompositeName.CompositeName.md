---
id: "java-en-function-compositename-compositename"
language: "java"
lang: "en"
category: "function"
name: "CompositeName.CompositeName"
signature: "protected CompositeName(Enumeration<String> comps)"
title: "CompositeName.CompositeName"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/CompositeName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompositeName.CompositeName

```java
protected CompositeName(Enumeration<String> comps)
```

Constructs a new composite name instance using the components
 specified by 'comps'. This protected method is intended
 to be used by subclasses of CompositeName when they override
 methods such as clone(), getPrefix(), getSuffix().

**参数**

- **comps** — A non-null enumeration containing the components for the new composite name. Each element is of class String. The enumeration will be consumed to extract its elements.
