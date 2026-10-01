---
id: "java-en-function-mbeanattributeinfo-mbeanattributeinfo"
language: "java"
lang: "en"
category: "function"
name: "MBeanAttributeInfo.MBeanAttributeInfo"
signature: "public MBeanAttributeInfo(String name, String type, String description, boolean isReadable, boolean isWritable, boolean isIs)"
title: "MBeanAttributeInfo.MBeanAttributeInfo"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanAttributeInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanAttributeInfo.MBeanAttributeInfo

```java
public MBeanAttributeInfo(String name, String type, String description, boolean isReadable, boolean isWritable, boolean isIs)
```

Constructs an `MBeanAttributeInfo` object.

**参数**

- **name** — The name of the attribute.
- **type** — The type or class name of the attribute.
- **description** — A human readable description of the attribute.
- **isReadable** — True if the attribute has a getter method, false otherwise.
- **isWritable** — True if the attribute has a setter method, false otherwise.
- **isIs** — True if this attribute has an "is" getter, false otherwise.

**异常**

- **IllegalArgumentException** — if `isIs` is true but `isReadable` is not, or if `isIs` is true and `type` is not `boolean` or `java.lang.Boolean`. (New code should always use `boolean` rather than `java.lang.Boolean`.)
