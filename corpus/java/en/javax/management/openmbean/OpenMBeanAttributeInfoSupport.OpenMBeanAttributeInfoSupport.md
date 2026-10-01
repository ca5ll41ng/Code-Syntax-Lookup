---
id: "java-en-function-openmbeanattributeinfosupport-openmbeanattributeinfosupport"
language: "java"
lang: "en"
category: "function"
name: "OpenMBeanAttributeInfoSupport.OpenMBeanAttributeInfoSupport"
signature: "public OpenMBeanAttributeInfoSupport(String name, String description, OpenType<?> openType, boolean isReadable, boolean isWritable, boolean isIs)"
title: "OpenMBeanAttributeInfoSupport.OpenMBeanAttributeInfoSupport"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/OpenMBeanAttributeInfoSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OpenMBeanAttributeInfoSupport.OpenMBeanAttributeInfoSupport

```java
public OpenMBeanAttributeInfoSupport(String name, String description, OpenType<?> openType, boolean isReadable, boolean isWritable, boolean isIs)
```

Constructs an `OpenMBeanAttributeInfoSupport` instance,
 which describes the attribute of an open MBean with the
 specified `name`, `openType` and `description`, and the specified read/write access properties.

**参数**

- **name** — cannot be a null or empty string.
- **description** — cannot be a null or empty string.
- **openType** — cannot be null.
- **isReadable** — `true` if the attribute has a getter exposed for management.
- **isWritable** — `true` if the attribute has a setter exposed for management.
- **isIs** — `true` if the attribute's getter is of the form isXXX.

**异常**

- **IllegalArgumentException** — if `name` or `description` are null or empty string, or `openType` is null.
