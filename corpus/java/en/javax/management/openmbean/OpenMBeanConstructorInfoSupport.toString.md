---
id: "java-en-function-openmbeanconstructorinfosupport-tostring"
language: "java"
lang: "en"
category: "function"
name: "OpenMBeanConstructorInfoSupport.toString"
signature: "public String toString()"
title: "OpenMBeanConstructorInfoSupport.toString"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/OpenMBeanConstructorInfoSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OpenMBeanConstructorInfoSupport.toString

```java
public String toString()
```

Returns a string representation of this `OpenMBeanConstructorInfoSupport` instance.

 

The string representation consists of the name of this class
 (ie `javax.management.openmbean.OpenMBeanConstructorInfoSupport`),
 the name and signature of the described constructor and the
 string representation of its descriptor.

 

As `OpenMBeanConstructorInfoSupport` instances are
 immutable, the string representation for this instance is
 calculated once, on the first call to `toString`, and
 then the same value is returned for subsequent calls.

**返回**

- a string representation of this `OpenMBeanConstructorInfoSupport` instance
