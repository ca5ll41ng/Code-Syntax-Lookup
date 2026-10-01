---
id: "java-en-function-mbeanconstructorinfo-mbeanconstructorinfo"
language: "java"
lang: "en"
category: "function"
name: "MBeanConstructorInfo.MBeanConstructorInfo"
signature: "public MBeanConstructorInfo(String description, Constructor<?> constructor)"
title: "MBeanConstructorInfo.MBeanConstructorInfo"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanConstructorInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanConstructorInfo.MBeanConstructorInfo

```java
public MBeanConstructorInfo(String description, Constructor<?> constructor)
```

Constructs an `MBeanConstructorInfo` object.  The
 `Descriptor` of the constructed object will include
 fields contributed by any annotations on the `Constructor` object that contain the `DescriptorKey`
 meta-annotation.

**参数**

- **description** — A human readable description of the operation.
- **constructor** — The `java.lang.reflect.Constructor` object describing the MBean constructor.
