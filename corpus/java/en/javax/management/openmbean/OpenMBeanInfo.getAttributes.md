---
id: "java-en-function-openmbeaninfo-getattributes"
language: "java"
lang: "en"
category: "function"
name: "OpenMBeanInfo.getAttributes"
signature: "public MBeanAttributeInfo[] getAttributes()"
title: "OpenMBeanInfo.getAttributes"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/OpenMBeanInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OpenMBeanInfo.getAttributes

```java
public MBeanAttributeInfo[] getAttributes()
```

Returns an array of `OpenMBeanAttributeInfo` instances
 describing each attribute in the open MBean described by this
 `OpenMBeanInfo` instance.  Each instance in the returned
 array should actually be a subclass of
 `MBeanAttributeInfo` which implements the
 `OpenMBeanAttributeInfo` interface (typically `OpenMBeanAttributeInfoSupport`).

**返回**

- the attribute array.
