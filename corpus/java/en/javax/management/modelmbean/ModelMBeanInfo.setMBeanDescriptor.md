---
id: "java-en-function-modelmbeaninfo-setmbeandescriptor"
language: "java"
lang: "en"
category: "function"
name: "ModelMBeanInfo.setMBeanDescriptor"
signature: "public void setMBeanDescriptor(Descriptor inDescriptor) throws MBeanException, RuntimeOperationsException"
title: "ModelMBeanInfo.setMBeanDescriptor"
directive: "method"
module: "java.management/javax.management.modelmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/modelmbean/ModelMBeanInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModelMBeanInfo.setMBeanDescriptor

```java
public void setMBeanDescriptor(Descriptor inDescriptor) throws MBeanException, RuntimeOperationsException
```

Sets the ModelMBean's descriptor.  This descriptor contains default, MBean wide
 metadata about the MBean and default policies for persistence and caching. This operation
 does a complete replacement of the descriptor, no merging is done. If the descriptor to
 set to is null then the default descriptor will be created.
 The default descriptor is: name=className,descriptorType="mbean", displayName=className,
  persistPolicy="never",log="F",visibility="1"
 If the descriptor does not contain all these fields, they will be added with these default values.

 See `getMBeanDescriptor getMBeanDescriptor` method javadoc for description of valid field names.

**参数**

- **inDescriptor** — the descriptor to set.

**异常**

- **MBeanException** — Wraps a distributed communication Exception.
- **RuntimeOperationsException** — Wraps an IllegalArgumentException  for invalid descriptor.

**参见**

- #getMBeanDescriptor
