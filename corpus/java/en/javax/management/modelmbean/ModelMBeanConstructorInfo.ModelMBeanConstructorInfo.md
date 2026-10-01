---
id: "java-en-function-modelmbeanconstructorinfo-modelmbeanconstructorinfo"
language: "java"
lang: "en"
category: "function"
name: "ModelMBeanConstructorInfo.ModelMBeanConstructorInfo"
signature: "public ModelMBeanConstructorInfo(String description, Constructor<?> constructorMethod)"
title: "ModelMBeanConstructorInfo.ModelMBeanConstructorInfo"
directive: "method"
module: "java.management/javax.management.modelmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/modelmbean/ModelMBeanConstructorInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModelMBeanConstructorInfo.ModelMBeanConstructorInfo

```java
public ModelMBeanConstructorInfo(String description, Constructor<?> constructorMethod)
```

Constructs a ModelMBeanConstructorInfo object with a default
 descriptor.  The `Descriptor` of the constructed
 object will include fields contributed by any annotations on
 the `Constructor` object that contain the `DescriptorKey` meta-annotation.

**参数**

- **description** — A human readable description of the constructor.
- **constructorMethod** — The java.lang.reflect.Constructor object describing the MBean constructor.
