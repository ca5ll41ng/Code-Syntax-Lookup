---
id: "java-en-function-openmbeaninfosupport-tostring"
language: "java"
lang: "en"
category: "function"
name: "OpenMBeanInfoSupport.toString"
signature: "public String toString()"
title: "OpenMBeanInfoSupport.toString"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/OpenMBeanInfoSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OpenMBeanInfoSupport.toString

```java
public String toString()
```

Returns a string representation of this `OpenMBeanInfoSupport` instance.

 

The string representation consists of the name of this class
 (ie `javax.management.openmbean.OpenMBeanInfoSupport`),
 the MBean class name, the string representation of infos on
 attributes, constructors, operations and notifications of the
 described MBean and the string representation of the descriptor.

 

As `OpenMBeanInfoSupport` instances are immutable, the
 string representation for this instance is calculated once, on
 the first call to `toString`, and then the same value is
 returned for subsequent calls.

**返回**

- a string representation of this `OpenMBeanInfoSupport` instance
