---
id: "java-en-function-openmbeanoperationinfo-getsignature"
language: "java"
lang: "en"
category: "function"
name: "OpenMBeanOperationInfo.getSignature"
signature: "public MBeanParameterInfo[] getSignature()"
title: "OpenMBeanOperationInfo.getSignature"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/OpenMBeanOperationInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OpenMBeanOperationInfo.getSignature

```java
public MBeanParameterInfo[] getSignature()
```

Returns an array of `OpenMBeanParameterInfo` instances
 describing each parameter in the signature of the operation
 described by this `OpenMBeanOperationInfo` instance.
 Each instance in the returned array should actually be a
 subclass of `MBeanParameterInfo` which implements the
 `OpenMBeanParameterInfo` interface (typically `OpenMBeanParameterInfoSupport`).

**返回**

- the signature.
