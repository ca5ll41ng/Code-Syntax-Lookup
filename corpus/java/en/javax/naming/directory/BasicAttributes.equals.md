---
id: "java-en-function-basicattributes-equals"
language: "java"
lang: "en"
category: "function"
name: "BasicAttributes.equals"
signature: "public boolean equals(Object obj)"
title: "BasicAttributes.equals"
directive: "method"
module: "java.naming/javax.naming.directory"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/directory/BasicAttributes.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BasicAttributes.equals

```java
public boolean equals(Object obj)
```

Determines whether this `BasicAttributes` is equal to another
 `Attributes`
 Two `Attributes` are equal if they are both instances of
 `Attributes`,
 treat the case of attribute IDs the same way, and contain the
 same attributes. Each `Attribute` in this `BasicAttributes`
 is checked for equality using `Object.equals()`, which may have
 be overridden by implementations of `Attribute`).
 If a subclass overrides `equals()`,
 it should override `hashCode()`
 as well so that two `Attributes` instances that are equal
 have the same hash code.

**参数**

- **obj** — the possibly null object to compare against.

**返回**

- true If obj is equal to this BasicAttributes.

**参见**

- #hashCode
