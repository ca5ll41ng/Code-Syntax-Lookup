---
id: "java-en-function-mbeaninfo-getoperations"
language: "java"
lang: "en"
category: "function"
name: "MBeanInfo.getOperations"
signature: "public MBeanOperationInfo[] getOperations()"
title: "MBeanInfo.getOperations"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanInfo.getOperations

```java
public MBeanOperationInfo[] getOperations()
```

Returns the list of operations  of the MBean.
 Each operation is described by an `MBeanOperationInfo` object.

 The returned array is a shallow copy of the internal array,
 which means that it is a copy of the internal array of
 references to the `MBeanOperationInfo` objects
 but that each referenced `MBeanOperationInfo` object is not copied.

**返回**

- An array of `MBeanOperationInfo` objects.
