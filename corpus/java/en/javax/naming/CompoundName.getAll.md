---
id: "java-en-function-compoundname-getall"
language: "java"
lang: "en"
category: "function"
name: "CompoundName.getAll"
signature: "public Enumeration<String> getAll()"
title: "CompoundName.getAll"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/CompoundName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompoundName.getAll

```java
public Enumeration<String> getAll()
```

Retrieves the components of this compound name as an enumeration
 of strings.
 The effects of updates to this compound name on this enumeration
 is undefined.

**返回**

- A non-null enumeration of the components of this compound name. Each element of the enumeration is of class String.
