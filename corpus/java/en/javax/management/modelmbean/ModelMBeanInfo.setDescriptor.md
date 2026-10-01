---
id: "java-en-function-modelmbeaninfo-setdescriptor"
language: "java"
lang: "en"
category: "function"
name: "ModelMBeanInfo.setDescriptor"
signature: "public void setDescriptor(Descriptor inDescriptor, String inDescriptorType) throws MBeanException, RuntimeOperationsException"
title: "ModelMBeanInfo.setDescriptor"
directive: "method"
module: "java.management/javax.management.modelmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/modelmbean/ModelMBeanInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModelMBeanInfo.setDescriptor

```java
public void setDescriptor(Descriptor inDescriptor, String inDescriptorType) throws MBeanException, RuntimeOperationsException
```

Sets descriptors in the info array of type inDescriptorType
 for the ModelMBean.  The setDescriptor method of the
 corresponding ModelMBean*Info will be called to set the
 specified descriptor.

**参数**

- **inDescriptor** — The descriptor to be set in the ModelMBean. It must NOT be null.  All descriptors must have name and descriptorType fields.
- **inDescriptorType** — The type of the descriptor being set. If this is null then the descriptorType field in the descriptor is used. If specified this value must be set in the descriptorType field in the descriptor. Must be "mbean","attribute", "constructor", "operation", or "notification".

**异常**

- **RuntimeOperationsException** — Wraps an IllegalArgumentException for illegal or null arguments or if the name field of the descriptor is not found in the corresponding MBeanAttributeInfo or MBeanConstructorInfo or MBeanNotificationInfo or MBeanOperationInfo.
- **MBeanException** — Wraps a distributed communication Exception.

**参见**

- #getDescriptor
