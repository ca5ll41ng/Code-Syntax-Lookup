---
id: "java-en-function-modelmbeaninfo-getdescriptor"
language: "java"
lang: "en"
category: "function"
name: "ModelMBeanInfo.getDescriptor"
signature: "public Descriptor getDescriptor(String inDescriptorName, String inDescriptorType) throws MBeanException, RuntimeOperationsException"
title: "ModelMBeanInfo.getDescriptor"
directive: "method"
module: "java.management/javax.management.modelmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/modelmbean/ModelMBeanInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModelMBeanInfo.getDescriptor

```java
public Descriptor getDescriptor(String inDescriptorName, String inDescriptorType) throws MBeanException, RuntimeOperationsException
```

Returns a Descriptor requested by name and descriptorType.

**参数**

- **inDescriptorName** — The name of the descriptor.
- **inDescriptorType** — The type of the descriptor being requested.  If this is null or empty then all types are searched. Valid types are 'mbean', 'attribute', 'constructor' 'operation', and 'notification'. This value will be equal to the 'descriptorType' field in the descriptor that is returned.

**返回**

- Descriptor containing the descriptor for the ModelMBean with the same name and descriptorType.  If no descriptor is found, null is returned.

**异常**

- **MBeanException** — Wraps a distributed communication Exception.
- **RuntimeOperationsException** — Wraps an IllegalArgumentException for a null descriptor name or null or invalid type. The type must be "mbean","attribute", "constructor", "operation", or "notification".

**参见**

- #setDescriptor
