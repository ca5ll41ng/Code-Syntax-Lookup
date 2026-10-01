---
id: "java-en-function-compositename-startswith"
language: "java"
lang: "en"
category: "function"
name: "CompositeName.startsWith"
signature: "public boolean startsWith(Name n)"
title: "CompositeName.startsWith"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/CompositeName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompositeName.startsWith

```java
public boolean startsWith(Name n)
```

Determines whether a composite name is a prefix of this composite name.
 A composite name 'n' is a prefix if it is equal to
 getPrefix(n.size())--in other words, this composite name
 starts with 'n'. If 'n' is null or not a composite name, false is returned.

**参数**

- **n** — The possibly null name to check.

**返回**

- true if n is a CompositeName and is a prefix of this composite name, false otherwise.
