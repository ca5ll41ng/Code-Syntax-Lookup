---
id: "java-en-function-reference-getall"
language: "java"
lang: "en"
category: "function"
name: "Reference.getAll"
signature: "public Enumeration<RefAddr> getAll()"
title: "Reference.getAll"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/Reference.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Reference.getAll

```java
public Enumeration<RefAddr> getAll()
```

Retrieves an enumeration of the addresses in this reference.
 When addresses are added, changed or removed from this reference,
 its effects on this enumeration are undefined.

**返回**

- An non-null enumeration of the addresses (`RefAddr`) in this reference. If this reference has zero addresses, an enumeration with zero elements is returned.
