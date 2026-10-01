---
id: "java-en-function-openmbeaninfo-getoperations"
language: "java"
lang: "en"
category: "function"
name: "OpenMBeanInfo.getOperations"
signature: "public MBeanOperationInfo[] getOperations()"
title: "OpenMBeanInfo.getOperations"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/OpenMBeanInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OpenMBeanInfo.getOperations

```java
public MBeanOperationInfo[] getOperations()
```

Returns an array of `OpenMBeanOperationInfo` instances
 describing each operation in the open MBean described by this
 `OpenMBeanInfo` instance.  Each instance in the returned
 array should actually be a subclass of
 `MBeanOperationInfo` which implements the
 `OpenMBeanOperationInfo` interface (typically `OpenMBeanOperationInfoSupport`).

**返回**

- the operation array.
