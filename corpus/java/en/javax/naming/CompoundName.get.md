---
id: "java-en-function-compoundname-get"
language: "java"
lang: "en"
category: "function"
name: "CompoundName.get"
signature: "public String get(int posn)"
title: "CompoundName.get"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/CompoundName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompoundName.get

```java
public String get(int posn)
```

Retrieves a component of this compound name.

**参数**

- **posn** — The 0-based index of the component to retrieve. Must be in the range [0,size()).

**返回**

- The component at index posn.

**异常**

- **ArrayIndexOutOfBoundsException** — if posn is outside the specified range.
