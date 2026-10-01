---
id: "java-en-function-compositename-remove"
language: "java"
lang: "en"
category: "function"
name: "CompositeName.remove"
signature: "public Object remove(int posn) throws InvalidNameException"
title: "CompositeName.remove"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/CompositeName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompositeName.remove

```java
public Object remove(int posn) throws InvalidNameException
```

Deletes a component from this composite name.
 The component of this composite name at position 'posn' is removed,
 and components at indices greater than 'posn'
 are shifted down (towards index 0) by one.

**参数**

- **posn** — The index of the component to delete. Must be in the range [0,size()).

**返回**

- The component removed (a String).

**异常**

- **ArrayIndexOutOfBoundsException** — If posn is outside the specified range (includes case where composite name is empty).
- **InvalidNameException** — If deleting the component would violate the name's syntax.
