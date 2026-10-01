---
id: "java-en-function-tabulartype-tostring"
language: "java"
lang: "en"
category: "function"
name: "TabularType.toString"
signature: "public String toString()"
title: "TabularType.toString"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/TabularType.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TabularType.toString

```java
public String toString()
```

Returns a string representation of this TabularType instance.
 

 The string representation consists of the name of this class (ie javax.management.openmbean.TabularType),
 the type name for this instance, the row type string representation of this instance,
 and the index names of this instance.
 

 As TabularType instances are immutable, the string representation for this instance is calculated once,
 on the first call to toString, and then the same value is returned for subsequent calls.

**返回**

- a string representation of this TabularType instance
