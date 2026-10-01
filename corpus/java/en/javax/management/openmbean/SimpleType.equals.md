---
id: "java-en-function-simpletype-equals"
language: "java"
lang: "en"
category: "function"
name: "SimpleType.equals"
signature: "public boolean equals(Object obj)"
title: "SimpleType.equals"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/SimpleType.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SimpleType.equals

```java
public boolean equals(Object obj)
```

Compares the specified obj parameter with this SimpleType instance for equality.
 

 Two SimpleType instances are equal if and only if their
 `getClassName() getClassName` methods return the same value.

**参数**

- **obj** — the object to be compared for equality with this SimpleType instance; if obj is null or is not an instance of the class SimpleType, equals returns false.

**返回**

- true if the specified object is equal to this SimpleType instance.
