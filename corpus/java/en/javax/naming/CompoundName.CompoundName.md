---
id: "java-en-function-compoundname-compoundname"
language: "java"
lang: "en"
category: "function"
name: "CompoundName.CompoundName"
signature: "protected CompoundName(Enumeration<String> comps, Properties syntax)"
title: "CompoundName.CompoundName"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/CompoundName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompoundName.CompoundName

```java
protected CompoundName(Enumeration<String> comps, Properties syntax)
```

Constructs a new compound name instance using the components
 specified in comps and syntax. This protected method is intended
 to be used by subclasses of CompoundName when they override
 methods such as clone(), getPrefix(), getSuffix().

**参数**

- **comps** — A non-null enumeration of the components to add. Each element of the enumeration is of class String. The enumeration will be consumed to extract its elements.
- **syntax** — A non-null properties that specify the syntax of this compound name. See class description for contents of properties.
