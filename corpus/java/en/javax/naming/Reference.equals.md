---
id: "java-en-function-reference-equals"
language: "java"
lang: "en"
category: "function"
name: "Reference.equals"
signature: "public boolean equals(Object obj)"
title: "Reference.equals"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/Reference.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Reference.equals

```java
public boolean equals(Object obj)
```

Determines whether obj is a reference with the same addresses
 (in same order) as this reference.
 The addresses are checked using RefAddr.equals().
 In addition to having the same addresses, the Reference also needs to
 have the same class name as this reference.
 The class factory and class factory location are not checked.
 If obj is null or not an instance of Reference, null is returned.

**参数**

- **obj** — The possibly null object to check.

**返回**

- true if obj is equal to this reference; false otherwise.
