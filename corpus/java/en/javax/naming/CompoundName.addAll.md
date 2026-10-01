---
id: "java-en-function-compoundname-addall"
language: "java"
lang: "en"
category: "function"
name: "CompoundName.addAll"
signature: "public Name addAll(Name suffix) throws InvalidNameException"
title: "CompoundName.addAll"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/CompoundName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompoundName.addAll

```java
public Name addAll(Name suffix) throws InvalidNameException
```

Adds the components of a compound name -- in order -- to the end of
 this compound name.

 Implementation note: Currently the syntax properties of suffix
  is not used or checked. They might be in the future.

**参数**

- **suffix** — The non-null components to add.

**返回**

- The updated CompoundName, not a new one. Cannot be null.

**异常**

- **InvalidNameException** — If suffix is not a compound name, or if the addition of the components violates the syntax of this compound name (e.g. exceeding number of components).
