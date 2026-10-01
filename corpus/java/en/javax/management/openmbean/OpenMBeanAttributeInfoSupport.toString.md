---
id: "java-en-function-openmbeanattributeinfosupport-tostring"
language: "java"
lang: "en"
category: "function"
name: "OpenMBeanAttributeInfoSupport.toString"
signature: "public String toString()"
title: "OpenMBeanAttributeInfoSupport.toString"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/OpenMBeanAttributeInfoSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OpenMBeanAttributeInfoSupport.toString

```java
public String toString()
```

Returns a string representation of this
 `OpenMBeanAttributeInfoSupport` instance.
 

 The string representation consists of the name of this class (i.e.
 `javax.management.openmbean.OpenMBeanAttributeInfoSupport`),
 the string representation of the name and open type of the
 described parameter, the string representation of its
 default, min, max and legal values and the string
 representation of its descriptor.

 

As `OpenMBeanAttributeInfoSupport` instances are
 immutable, the string representation for this instance is
 calculated once, on the first call to `toString`, and
 then the same value is returned for subsequent calls.

**返回**

- a string representation of this `OpenMBeanAttributeInfoSupport` instance.
