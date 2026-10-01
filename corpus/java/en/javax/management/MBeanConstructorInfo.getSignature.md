---
id: "java-en-function-mbeanconstructorinfo-getsignature"
language: "java"
lang: "en"
category: "function"
name: "MBeanConstructorInfo.getSignature"
signature: "public MBeanParameterInfo[] getSignature()"
title: "MBeanConstructorInfo.getSignature"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanConstructorInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanConstructorInfo.getSignature

```java
public MBeanParameterInfo[] getSignature()
```

Returns the list of parameters for this constructor.  Each
 parameter is described by an `MBeanParameterInfo`
 object.

 

The returned array is a shallow copy of the internal array,
 which means that it is a copy of the internal array of
 references to the `MBeanParameterInfo` objects but
 that each referenced `MBeanParameterInfo` object is
 not copied.

**返回**

- An array of `MBeanParameterInfo` objects.
