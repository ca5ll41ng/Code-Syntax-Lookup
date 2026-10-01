---
id: "java-en-function-modelmbeanoperationinfo-setdescriptor"
language: "java"
lang: "en"
category: "function"
name: "ModelMBeanOperationInfo.setDescriptor"
signature: "public void setDescriptor(Descriptor inDescriptor)"
title: "ModelMBeanOperationInfo.setDescriptor"
directive: "method"
module: "java.management/javax.management.modelmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/modelmbean/ModelMBeanOperationInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModelMBeanOperationInfo.setDescriptor

```java
public void setDescriptor(Descriptor inDescriptor)
```

Sets associated Descriptor (full replace) for the
 ModelMBeanOperationInfo If the new Descriptor is null, then
 the associated Descriptor reverts to a default descriptor.
 The Descriptor is validated before it is assigned.  If the
 new Descriptor is invalid, then a
 RuntimeOperationsException wrapping an
 IllegalArgumentException is thrown.

**参数**

- **inDescriptor** — replaces the Descriptor associated with the ModelMBeanOperation.

**异常**

- **RuntimeOperationsException** — Wraps an IllegalArgumentException for invalid Descriptor.

**参见**

- #getDescriptor
