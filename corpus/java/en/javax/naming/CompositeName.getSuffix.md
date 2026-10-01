---
id: "java-en-function-compositename-getsuffix"
language: "java"
lang: "en"
category: "function"
name: "CompositeName.getSuffix"
signature: "public Name getSuffix(int posn)"
title: "CompositeName.getSuffix"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/CompositeName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompositeName.getSuffix

```java
public Name getSuffix(int posn)
```

Creates a composite name whose components consist of a suffix of the
 components in this composite name. Subsequent changes to
 this composite name does not affect the name that is returned.

**参数**

- **posn** — The 0-based index of the component at which to start. Must be in the range [0,size()].

**返回**

- A composite name consisting of the components at indexes in the range [posn,size()).  If posn is equal to size(), an empty composite name is returned.

**异常**

- **ArrayIndexOutOfBoundsException** — If posn is outside the specified range.
