---
id: "java-en-function-compositename-getall"
language: "java"
lang: "en"
category: "function"
name: "CompositeName.getAll"
signature: "public Enumeration<String> getAll()"
title: "CompositeName.getAll"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/CompositeName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompositeName.getAll

```java
public Enumeration<String> getAll()
```

Retrieves the components of this composite name as an enumeration
 of strings.
 The effects of updates to this composite name on this enumeration
 is undefined.

**返回**

- A non-null enumeration of the components of this composite name. Each element of the enumeration is of class String.
