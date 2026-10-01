---
id: "java-en-function-compositetype-tostring"
language: "java"
lang: "en"
category: "function"
name: "CompositeType.toString"
signature: "public String toString()"
title: "CompositeType.toString"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/CompositeType.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompositeType.toString

```java
public String toString()
```

Returns a string representation of this CompositeType instance.
 

 The string representation consists of
 the name of this class (ie javax.management.openmbean.CompositeType), the type name for this instance,
 and the list of the items names and types string representation of this instance.
 

 As CompositeType instances are immutable, the string representation for this instance is calculated once,
 on the first call to toString, and then the same value is returned for subsequent calls.

**返回**

- a string representation of this CompositeType instance
