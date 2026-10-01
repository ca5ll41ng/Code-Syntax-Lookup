---
id: "java-en-function-name-remove"
language: "java"
lang: "en"
category: "function"
name: "Name.remove"
signature: "public Object remove(int posn) throws InvalidNameException"
title: "Name.remove"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/Name.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Name.remove

```java
public Object remove(int posn) throws InvalidNameException
```

Removes a component from this name.
 The component of this name at the specified position is removed.
 Components with indexes greater than this position
 are shifted down (toward index 0) by one.

**参数**

- **posn** — the index of the component to remove. Must be in the range [0,size()).

**返回**

- the component removed (a String)

**异常**

- **ArrayIndexOutOfBoundsException** — if posn is outside the specified range
- **InvalidNameException** — if deleting the component would violate the syntax rules of the name
