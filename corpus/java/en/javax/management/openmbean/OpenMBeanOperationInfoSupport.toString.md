---
id: "java-en-function-openmbeanoperationinfosupport-tostring"
language: "java"
lang: "en"
category: "function"
name: "OpenMBeanOperationInfoSupport.toString"
signature: "public String toString()"
title: "OpenMBeanOperationInfoSupport.toString"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/OpenMBeanOperationInfoSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OpenMBeanOperationInfoSupport.toString

```java
public String toString()
```

Returns a string representation of this `OpenMBeanOperationInfoSupport` instance.

 

The string representation consists of the name of this class
 (ie `javax.management.openmbean.OpenMBeanOperationInfoSupport`), and
 the name, signature, return open type and impact of the
 described operation and the string representation of its descriptor.

 

As `OpenMBeanOperationInfoSupport` instances are
 immutable, the string representation for this instance is
 calculated once, on the first call to `toString`, and
 then the same value is returned for subsequent calls.

**返回**

- a string representation of this `OpenMBeanOperationInfoSupport` instance
