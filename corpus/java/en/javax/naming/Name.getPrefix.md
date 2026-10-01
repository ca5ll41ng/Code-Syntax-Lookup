---
id: "java-en-function-name-getprefix"
language: "java"
lang: "en"
category: "function"
name: "Name.getPrefix"
signature: "public Name getPrefix(int posn)"
title: "Name.getPrefix"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/Name.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Name.getPrefix

```java
public Name getPrefix(int posn)
```

Creates a name whose components consist of a prefix of the
 components of this name.  Subsequent changes to
 this name will not affect the name that is returned and vice versa.

**参数**

- **posn** — the 0-based index of the component at which to stop. Must be in the range [0,size()].

**返回**

- a name consisting of the components at indexes in the range [0,posn).

**异常**

- **ArrayIndexOutOfBoundsException** — if posn is outside the specified range
