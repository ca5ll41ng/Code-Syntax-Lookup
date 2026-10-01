---
id: "java-en-function-modelmbeanattributeinfo-modelmbeanattributeinfo"
language: "java"
lang: "en"
category: "function"
name: "ModelMBeanAttributeInfo.ModelMBeanAttributeInfo"
signature: "public ModelMBeanAttributeInfo(String name, String description, Method getter, Method setter) throws javax.management.IntrospectionException"
title: "ModelMBeanAttributeInfo.ModelMBeanAttributeInfo"
directive: "method"
module: "java.management/javax.management.modelmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/modelmbean/ModelMBeanAttributeInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModelMBeanAttributeInfo.ModelMBeanAttributeInfo

```java
public ModelMBeanAttributeInfo(String name, String description, Method getter, Method setter) throws javax.management.IntrospectionException
```

Constructs a ModelMBeanAttributeInfo object with a default
 descriptor. The `Descriptor` of the constructed
 object will include fields contributed by any annotations
 on the `Method` objects that contain the `DescriptorKey` meta-annotation.

**参数**

- **name** — The name of the attribute.
- **description** — A human readable description of the attribute. Optional.
- **getter** — The method used for reading the attribute value. May be null if the property is write-only.
- **setter** — The method used for writing the attribute value. May be null if the attribute is read-only.

**异常**

- **javax.management.IntrospectionException** — There is a consistency problem in the definition of this attribute.
