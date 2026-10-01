---
id: "java-en-function-compositename-addall"
language: "java"
lang: "en"
category: "function"
name: "CompositeName.addAll"
signature: "public Name addAll(Name suffix) throws InvalidNameException"
title: "CompositeName.addAll"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/CompositeName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompositeName.addAll

```java
public Name addAll(Name suffix) throws InvalidNameException
```

Adds the components of a composite name -- in order -- to the end of
 this composite name.

**参数**

- **suffix** — The non-null components to add.

**返回**

- The updated CompositeName, not a new one. Cannot be null.

**异常**

- **InvalidNameException** — If suffix is not a composite name.
