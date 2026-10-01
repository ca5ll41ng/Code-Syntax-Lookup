---
id: "java-en-function-modelmbeaninfo-setdescriptors"
language: "java"
lang: "en"
category: "function"
name: "ModelMBeanInfo.setDescriptors"
signature: "public void setDescriptors(Descriptor[] inDescriptors) throws MBeanException, RuntimeOperationsException"
title: "ModelMBeanInfo.setDescriptors"
directive: "method"
module: "java.management/javax.management.modelmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/modelmbean/ModelMBeanInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModelMBeanInfo.setDescriptors

```java
public void setDescriptors(Descriptor[] inDescriptors) throws MBeanException, RuntimeOperationsException
```

Adds or replaces descriptors in the ModelMBeanInfo.

**参数**

- **inDescriptors** — The descriptors to be set in the ModelMBeanInfo. Null elements of the list will be ignored.  All descriptors must have name and descriptorType fields.

**异常**

- **RuntimeOperationsException** — Wraps an IllegalArgumentException for a null or invalid descriptor.
- **MBeanException** — Wraps a distributed communication Exception.

**参见**

- #getDescriptors
