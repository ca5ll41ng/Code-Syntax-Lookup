---
id: "java-en-function-modelmbeanoperationinfo-modelmbeanoperationinfo"
language: "java"
lang: "en"
category: "function"
name: "ModelMBeanOperationInfo.ModelMBeanOperationInfo"
signature: "public ModelMBeanOperationInfo(String description, Method operationMethod)"
title: "ModelMBeanOperationInfo.ModelMBeanOperationInfo"
directive: "method"
module: "java.management/javax.management.modelmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/modelmbean/ModelMBeanOperationInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModelMBeanOperationInfo.ModelMBeanOperationInfo

```java
public ModelMBeanOperationInfo(String description, Method operationMethod)
```

Constructs a ModelMBeanOperationInfo object with a default
 descriptor. The `Descriptor` of the constructed
 object will include fields contributed by any annotations
 on the `Method` object that contain the `DescriptorKey` meta-annotation.

**参数**

- **description** — A human readable description of the operation.
- **operationMethod** — The java.lang.reflect.Method object describing the MBean operation.
