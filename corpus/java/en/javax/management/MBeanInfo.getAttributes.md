---
id: "java-en-function-mbeaninfo-getattributes"
language: "java"
lang: "en"
category: "function"
name: "MBeanInfo.getAttributes"
signature: "public MBeanAttributeInfo[] getAttributes()"
title: "MBeanInfo.getAttributes"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanInfo.getAttributes

```java
public MBeanAttributeInfo[] getAttributes()
```

Returns the list of attributes exposed for management.
 Each attribute is described by an `MBeanAttributeInfo` object.

 The returned array is a shallow copy of the internal array,
 which means that it is a copy of the internal array of
 references to the `MBeanAttributeInfo` objects
 but that each referenced `MBeanAttributeInfo` object is not copied.

**返回**

- An array of `MBeanAttributeInfo` objects.
