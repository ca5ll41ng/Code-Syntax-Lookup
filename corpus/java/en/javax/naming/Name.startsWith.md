---
id: "java-en-function-name-startswith"
language: "java"
lang: "en"
category: "function"
name: "Name.startsWith"
signature: "public boolean startsWith(Name n)"
title: "Name.startsWith"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/Name.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Name.startsWith

```java
public boolean startsWith(Name n)
```

Determines whether this name starts with a specified prefix.
 A name `n` is a prefix if it is equal to
 `getPrefix(n.size())`.

**参数**

- **n** — the name to check

**返回**

- true if `n` is a prefix of this name, false otherwise
