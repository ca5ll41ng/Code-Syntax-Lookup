---
id: "java-en-function-simpletype-hashcode"
language: "java"
lang: "en"
category: "function"
name: "SimpleType.hashCode"
signature: "public int hashCode()"
title: "SimpleType.hashCode"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/SimpleType.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SimpleType.hashCode

```java
public int hashCode()
```

Returns the hash code value for this SimpleType instance.
 The hash code of a SimpleType instance is the hash code of
 the string value returned by the `getClassName() getClassName` method.
 

 As SimpleType instances are immutable, the hash code for this instance is calculated once,
 on the first call to hashCode, and then the same value is returned for subsequent calls.

**返回**

- the hash code value for this SimpleType instance
