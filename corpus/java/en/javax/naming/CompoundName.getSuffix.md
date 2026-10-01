---
id: "java-en-function-compoundname-getsuffix"
language: "java"
lang: "en"
category: "function"
name: "CompoundName.getSuffix"
signature: "public Name getSuffix(int posn)"
title: "CompoundName.getSuffix"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/CompoundName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompoundName.getSuffix

```java
public Name getSuffix(int posn)
```

Creates a compound name whose components consist of a suffix of the
 components in this compound name.
 The result and this compound name share the same syntax.
 Subsequent changes to
 this compound name do not affect the name that is returned.

**参数**

- **posn** — The 0-based index of the component at which to start. Must be in the range [0,size()].

**返回**

- A compound name consisting of the components at indexes in the range [posn,size()).  If posn is equal to size(), an empty compound name is returned.

**异常**

- **ArrayIndexOutOfBoundsException** — If posn is outside the specified range.
