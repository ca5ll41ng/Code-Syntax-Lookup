---
id: "java-en-function-modelmbeaninfo-getoperation"
language: "java"
lang: "en"
category: "function"
name: "ModelMBeanInfo.getOperation"
signature: "public ModelMBeanOperationInfo getOperation(String inName) throws MBeanException, RuntimeOperationsException"
title: "ModelMBeanInfo.getOperation"
directive: "method"
module: "java.management/javax.management.modelmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/modelmbean/ModelMBeanInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModelMBeanInfo.getOperation

```java
public ModelMBeanOperationInfo getOperation(String inName) throws MBeanException, RuntimeOperationsException
```

Returns a ModelMBeanOperationInfo requested by name.

**参数**

- **inName** — The name of the ModelMBeanOperationInfo to get. If no ModelMBeanOperationInfo exists for this name null is returned.

**返回**

- the operation info for the named operation, or null if there is none.

**异常**

- **MBeanException** — Wraps a distributed communication Exception.
- **RuntimeOperationsException** — Wraps an IllegalArgumentException for a null operation name.
