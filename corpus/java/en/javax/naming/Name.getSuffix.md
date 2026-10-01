---
id: "java-en-function-name-getsuffix"
language: "java"
lang: "en"
category: "function"
name: "Name.getSuffix"
signature: "public Name getSuffix(int posn)"
title: "Name.getSuffix"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/Name.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Name.getSuffix

```java
public Name getSuffix(int posn)
```

Creates a name whose components consist of a suffix of the
 components in this name.  Subsequent changes to
 this name do not affect the name that is returned and vice versa.

**参数**

- **posn** — the 0-based index of the component at which to start. Must be in the range [0,size()].

**返回**

- a name consisting of the components at indexes in the range [posn,size()).  If posn is equal to size(), an empty name is returned.

**异常**

- **ArrayIndexOutOfBoundsException** — if posn is outside the specified range
