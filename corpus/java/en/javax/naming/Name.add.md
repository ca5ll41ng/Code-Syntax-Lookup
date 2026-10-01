---
id: "java-en-function-name-add"
language: "java"
lang: "en"
category: "function"
name: "Name.add"
signature: "public Name add(String comp) throws InvalidNameException"
title: "Name.add"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/Name.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Name.add

```java
public Name add(String comp) throws InvalidNameException
```

Adds a single component to the end of this name.

**参数**

- **comp** — the component to add

**返回**

- the updated name (not a new one)

**异常**

- **InvalidNameException** — if adding `comp` would violate the syntax rules of this name
