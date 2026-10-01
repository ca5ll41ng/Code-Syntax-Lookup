---
id: "java-en-function-compositename-endswith"
language: "java"
lang: "en"
category: "function"
name: "CompositeName.endsWith"
signature: "public boolean endsWith(Name n)"
title: "CompositeName.endsWith"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/CompositeName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompositeName.endsWith

```java
public boolean endsWith(Name n)
```

Determines whether a composite name is a suffix of this composite name.
 A composite name 'n' is a suffix if it is equal to
 getSuffix(size()-n.size())--in other words, this
 composite name ends with 'n'.
 If n is null or not a composite name, false is returned.

**参数**

- **n** — The possibly null name to check.

**返回**

- true if n is a CompositeName and is a suffix of this composite name, false otherwise.
