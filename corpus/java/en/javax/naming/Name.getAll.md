---
id: "java-en-function-name-getall"
language: "java"
lang: "en"
category: "function"
name: "Name.getAll"
signature: "public Enumeration<String> getAll()"
title: "Name.getAll"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/Name.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Name.getAll

```java
public Enumeration<String> getAll()
```

Retrieves the components of this name as an enumeration
 of strings.  The effect on the enumeration of updates to
 this name is undefined.  If the name has zero components,
 an empty (non-null) enumeration is returned.

**返回**

- an enumeration of the components of this name, each a string
