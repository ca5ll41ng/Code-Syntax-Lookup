---
id: "java-en-function-simpletype-isvalue"
language: "java"
lang: "en"
category: "function"
name: "SimpleType.isValue"
signature: "public boolean isValue(Object obj)"
title: "SimpleType.isValue"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/SimpleType.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SimpleType.isValue

```java
public boolean isValue(Object obj)
```

Tests whether obj is a value for this
 SimpleType instance.  

 This method returns
 true if and only if obj is not null and
 obj's class name is the same as the className field
 defined for this SimpleType instance (ie the class
 name returned by the `getClassName()
 getClassName` method).

**参数**

- **obj** — the object to be tested.

**返回**

- true if obj is a value for this SimpleType instance.
