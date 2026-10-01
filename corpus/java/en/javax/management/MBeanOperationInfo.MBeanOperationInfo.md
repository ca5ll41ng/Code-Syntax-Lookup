---
id: "java-en-function-mbeanoperationinfo-mbeanoperationinfo"
language: "java"
lang: "en"
category: "function"
name: "MBeanOperationInfo.MBeanOperationInfo"
signature: "public MBeanOperationInfo(String description, Method method)"
title: "MBeanOperationInfo.MBeanOperationInfo"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanOperationInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanOperationInfo.MBeanOperationInfo

```java
public MBeanOperationInfo(String description, Method method)
```

Constructs an `MBeanOperationInfo` object.  The
 `Descriptor` of the constructed object will include
 fields contributed by any annotations on the `Method`
 object that contain the `DescriptorKey` meta-annotation.

**参数**

- **description** — A human readable description of the operation.
- **method** — The `java.lang.reflect.Method` object describing the MBean operation.
