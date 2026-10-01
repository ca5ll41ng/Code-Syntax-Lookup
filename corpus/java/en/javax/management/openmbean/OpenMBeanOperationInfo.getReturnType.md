---
id: "java-en-function-openmbeanoperationinfo-getreturntype"
language: "java"
lang: "en"
category: "function"
name: "OpenMBeanOperationInfo.getReturnType"
signature: "public String getReturnType()"
title: "OpenMBeanOperationInfo.getReturnType"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/OpenMBeanOperationInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OpenMBeanOperationInfo.getReturnType

```java
public String getReturnType()
```

Returns the fully qualified Java class name of the values
 returned by the operation described by this
 `OpenMBeanOperationInfo` instance.  This method should
 return the same value as a call to
 `getReturnOpenType().getClassName()`.

**返回**

- the return type.
