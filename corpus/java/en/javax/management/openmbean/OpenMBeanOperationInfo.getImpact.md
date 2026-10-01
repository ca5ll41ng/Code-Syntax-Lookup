---
id: "java-en-function-openmbeanoperationinfo-getimpact"
language: "java"
lang: "en"
category: "function"
name: "OpenMBeanOperationInfo.getImpact"
signature: "public int getImpact()"
title: "OpenMBeanOperationInfo.getImpact"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/OpenMBeanOperationInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OpenMBeanOperationInfo.getImpact

```java
public int getImpact()
```

Returns an `int` constant qualifying the impact of the
 operation described by this `OpenMBeanOperationInfo`
 instance.

 The returned constant is one of `INFO`, `ACTION`, `ACTION_INFO`, or `UNKNOWN`.

**返回**

- the impact code.
