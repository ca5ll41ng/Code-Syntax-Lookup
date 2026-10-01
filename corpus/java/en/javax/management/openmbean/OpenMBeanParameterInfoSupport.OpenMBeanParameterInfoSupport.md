---
id: "java-en-function-openmbeanparameterinfosupport-openmbeanparameterinfosupport"
language: "java"
lang: "en"
category: "function"
name: "OpenMBeanParameterInfoSupport.OpenMBeanParameterInfoSupport"
signature: "public OpenMBeanParameterInfoSupport(String name, String description, OpenType<?> openType)"
title: "OpenMBeanParameterInfoSupport.OpenMBeanParameterInfoSupport"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/OpenMBeanParameterInfoSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OpenMBeanParameterInfoSupport.OpenMBeanParameterInfoSupport

```java
public OpenMBeanParameterInfoSupport(String name, String description, OpenType<?> openType)
```

Constructs an `OpenMBeanParameterInfoSupport` instance,
 which describes the parameter used in one or more operations or
 constructors of a class of open MBeans, with the specified
 `name`, `openType` and `description`.

**参数**

- **name** — cannot be a null or empty string.
- **description** — cannot be a null or empty string.
- **openType** — cannot be null.

**异常**

- **IllegalArgumentException** — if `name` or `description` are null or empty string, or `openType` is null.
