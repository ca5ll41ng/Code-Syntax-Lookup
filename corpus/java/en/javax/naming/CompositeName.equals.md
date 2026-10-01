---
id: "java-en-function-compositename-equals"
language: "java"
lang: "en"
category: "function"
name: "CompositeName.equals"
signature: "public boolean equals(Object obj)"
title: "CompositeName.equals"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/CompositeName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompositeName.equals

```java
public boolean equals(Object obj)
```

Determines whether two composite names are equal.
 If obj is null or not a composite name, false is returned.
 Two composite names are equal if each component in one is equal
 to the corresponding component in the other. This implies
 both have the same number of components, and each component's
 equals() test against the corresponding component in the other name
 returns true.

**参数**

- **obj** — The possibly null object to compare against.

**返回**

- true if obj is equal to this composite name, false otherwise.

**参见**

- #hashCode
