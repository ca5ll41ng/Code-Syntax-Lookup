---
id: "java-en-function-mbeanoperationinfo-getsignature"
language: "java"
lang: "en"
category: "function"
name: "MBeanOperationInfo.getSignature"
signature: "public MBeanParameterInfo[] getSignature()"
title: "MBeanOperationInfo.getSignature"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanOperationInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanOperationInfo.getSignature

```java
public MBeanParameterInfo[] getSignature()
```

Returns the list of parameters for this operation.  Each
 parameter is described by an `MBeanParameterInfo`
 object.

 

The returned array is a shallow copy of the internal array,
 which means that it is a copy of the internal array of
 references to the `MBeanParameterInfo` objects but
 that each referenced `MBeanParameterInfo` object is
 not copied.

**返回**

- An array of `MBeanParameterInfo` objects.
