---
id: "java-en-function-name-addall"
language: "java"
lang: "en"
category: "function"
name: "Name.addAll"
signature: "public Name addAll(Name suffix) throws InvalidNameException"
title: "Name.addAll"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/Name.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Name.addAll

```java
public Name addAll(Name suffix) throws InvalidNameException
```

Adds the components of a name -- in order -- to the end of this name.

**参数**

- **suffix** — the components to add

**返回**

- the updated name (not a new one)

**异常**

- **InvalidNameException** — if `suffix` is not a valid name, or if the addition of the components would violate the syntax rules of this name
