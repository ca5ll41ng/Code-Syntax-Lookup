---
id: "java-en-function-simpletype-tostring"
language: "java"
lang: "en"
category: "function"
name: "SimpleType.toString"
signature: "public String toString()"
title: "SimpleType.toString"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/SimpleType.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SimpleType.toString

```java
public String toString()
```

Returns a string representation of this SimpleType instance.
 

 The string representation consists of
 the name of this class (ie javax.management.openmbean.SimpleType) and the type name
 for this instance (which is the java class name of the values this SimpleType instance represents).
 

 As SimpleType instances are immutable, the string representation for this instance is calculated once,
 on the first call to toString, and then the same value is returned for subsequent calls.

**返回**

- a string representation of this SimpleType instance
