---
id: "java-en-function-modelmbeaninfosupport-getdescriptor"
language: "java"
lang: "en"
category: "function"
name: "ModelMBeanInfoSupport.getDescriptor"
signature: "public Descriptor getDescriptor(String inDescriptorName) throws MBeanException, RuntimeOperationsException"
title: "ModelMBeanInfoSupport.getDescriptor"
directive: "method"
module: "java.management/javax.management.modelmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/modelmbean/ModelMBeanInfoSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModelMBeanInfoSupport.getDescriptor

```java
public Descriptor getDescriptor(String inDescriptorName) throws MBeanException, RuntimeOperationsException
```

Returns a Descriptor requested by name.

**参数**

- **inDescriptorName** — The name of the descriptor.

**返回**

- Descriptor containing a descriptor for the ModelMBean with the same name. If no descriptor is found, null is returned.

**异常**

- **MBeanException** — Wraps a distributed communication Exception.
- **RuntimeOperationsException** — Wraps an IllegalArgumentException for null name.

**参见**

- #setDescriptor
