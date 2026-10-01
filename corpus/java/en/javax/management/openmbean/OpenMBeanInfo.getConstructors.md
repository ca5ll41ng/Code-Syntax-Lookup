---
id: "java-en-function-openmbeaninfo-getconstructors"
language: "java"
lang: "en"
category: "function"
name: "OpenMBeanInfo.getConstructors"
signature: "public MBeanConstructorInfo[] getConstructors()"
title: "OpenMBeanInfo.getConstructors"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/OpenMBeanInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OpenMBeanInfo.getConstructors

```java
public MBeanConstructorInfo[] getConstructors()
```

Returns an array of `OpenMBeanConstructorInfo` instances
 describing each constructor in the open MBean described by this
 `OpenMBeanInfo` instance.  Each instance in the returned
 array should actually be a subclass of
 `MBeanConstructorInfo` which implements the
 `OpenMBeanConstructorInfo` interface (typically `OpenMBeanConstructorInfoSupport`).

**返回**

- the constructor array.
