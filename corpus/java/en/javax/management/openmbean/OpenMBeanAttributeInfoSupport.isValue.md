---
id: "java-en-function-openmbeanattributeinfosupport-isvalue"
language: "java"
lang: "en"
category: "function"
name: "OpenMBeanAttributeInfoSupport.isValue"
signature: "public boolean isValue(Object obj)"
title: "OpenMBeanAttributeInfoSupport.isValue"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/OpenMBeanAttributeInfoSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OpenMBeanAttributeInfoSupport.isValue

```java
public boolean isValue(Object obj)
```

Tests whether `obj` is a valid value for the attribute
 described by this `OpenMBeanAttributeInfoSupport`
 instance.

**参数**

- **obj** — the object to be tested.

**返回**

- `true` if `obj` is a valid value for the parameter described by this `OpenMBeanAttributeInfoSupport` instance, `false` otherwise.
