---
id: "java-en-function-modelmbeanconstructorinfo-setdescriptor"
language: "java"
lang: "en"
category: "function"
name: "ModelMBeanConstructorInfo.setDescriptor"
signature: "public void setDescriptor(Descriptor inDescriptor)"
title: "ModelMBeanConstructorInfo.setDescriptor"
directive: "method"
module: "java.management/javax.management.modelmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/modelmbean/ModelMBeanConstructorInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModelMBeanConstructorInfo.setDescriptor

```java
public void setDescriptor(Descriptor inDescriptor)
```

Sets associated Descriptor (full replace) of
 ModelMBeanConstructorInfo.  If the new Descriptor is null,
 then the associated Descriptor reverts to a default
 descriptor.  The Descriptor is validated before it is
 assigned.  If the new Descriptor is invalid, then a
 RuntimeOperationsException wrapping an
 IllegalArgumentException is thrown.

**参数**

- **inDescriptor** — replaces the Descriptor associated with the ModelMBeanConstructor. If the descriptor does not contain all the following fields, the missing ones are added with their default values: displayName, name, role, descriptorType.

**异常**

- **RuntimeOperationsException** — Wraps an IllegalArgumentException.  The descriptor is invalid, or descriptor field "name" is present but not equal to name parameter, or descriptor field "descriptorType" is present but not equal to "operation" or descriptor field "role" is present but not equal to "constructor".

**参见**

- #getDescriptor
