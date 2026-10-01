---
id: "java-en-function-modelmbeaninfo-getdescriptors"
language: "java"
lang: "en"
category: "function"
name: "ModelMBeanInfo.getDescriptors"
signature: "public Descriptor[] getDescriptors(String inDescriptorType) throws MBeanException, RuntimeOperationsException"
title: "ModelMBeanInfo.getDescriptors"
directive: "method"
module: "java.management/javax.management.modelmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/modelmbean/ModelMBeanInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModelMBeanInfo.getDescriptors

```java
public Descriptor[] getDescriptors(String inDescriptorType) throws MBeanException, RuntimeOperationsException
```

Returns a Descriptor array consisting of all
 Descriptors for the ModelMBeanInfo of type inDescriptorType.

**参数**

- **inDescriptorType** — value of descriptorType field that must be set for the descriptor to be returned.  Must be "mbean", "attribute", "operation", "constructor" or "notification". If it is null or empty then all types will be returned.

**返回**

- Descriptor array containing all descriptors for the ModelMBean if type inDescriptorType.

**异常**

- **MBeanException** — Wraps a distributed communication Exception.
- **RuntimeOperationsException** — Wraps an IllegalArgumentException when the descriptorType in parameter is not one of: "mbean", "attribute", "operation", "constructor", "notification", empty or null.

**参见**

- #setDescriptors
