---
id: "java-en-function-modelmbeanattributeinfo-setdescriptor"
language: "java"
lang: "en"
category: "function"
name: "ModelMBeanAttributeInfo.setDescriptor"
signature: "public void setDescriptor(Descriptor inDescriptor)"
title: "ModelMBeanAttributeInfo.setDescriptor"
directive: "method"
module: "java.management/javax.management.modelmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/modelmbean/ModelMBeanAttributeInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModelMBeanAttributeInfo.setDescriptor

```java
public void setDescriptor(Descriptor inDescriptor)
```

Sets associated Descriptor (full replace) for the
 ModelMBeanAttributeDescriptor.  If the new Descriptor is
 null, then the associated Descriptor reverts to a default
 descriptor.  The Descriptor is validated before it is
 assigned.  If the new Descriptor is invalid, then a
 RuntimeOperationsException wrapping an
 IllegalArgumentException is thrown.

**参数**

- **inDescriptor** — replaces the Descriptor associated with the ModelMBeanAttributeInfo

**异常**

- **RuntimeOperationsException** — Wraps an IllegalArgumentException for an invalid Descriptor

**参见**

- #getDescriptor
