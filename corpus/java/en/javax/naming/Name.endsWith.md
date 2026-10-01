---
id: "java-en-function-name-endswith"
language: "java"
lang: "en"
category: "function"
name: "Name.endsWith"
signature: "public boolean endsWith(Name n)"
title: "Name.endsWith"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/Name.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Name.endsWith

```java
public boolean endsWith(Name n)
```

Determines whether this name ends with a specified suffix.
 A name `n` is a suffix if it is equal to
 `getSuffix(size()-n.size())`.

**参数**

- **n** — the name to check

**返回**

- true if `n` is a suffix of this name, false otherwise
