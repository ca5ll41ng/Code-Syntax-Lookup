---
id: "java-en-function-compoundname-add"
language: "java"
lang: "en"
category: "function"
name: "CompoundName.add"
signature: "public Name add(String comp) throws InvalidNameException"
title: "CompoundName.add"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/CompoundName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompoundName.add

```java
public Name add(String comp) throws InvalidNameException
```

Adds a single component to the end of this compound name.

**参数**

- **comp** — The non-null component to add.

**返回**

- The updated CompoundName, not a new one. Cannot be null.

**异常**

- **InvalidNameException** — If adding comp at end of the name would violate the compound name's syntax.
