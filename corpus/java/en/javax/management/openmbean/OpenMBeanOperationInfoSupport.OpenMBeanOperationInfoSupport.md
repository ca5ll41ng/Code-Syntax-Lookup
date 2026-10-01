---
id: "java-en-function-openmbeanoperationinfosupport-openmbeanoperationinfosupport"
language: "java"
lang: "en"
category: "function"
name: "OpenMBeanOperationInfoSupport.OpenMBeanOperationInfoSupport"
signature: "public OpenMBeanOperationInfoSupport(String name, String description, OpenMBeanParameterInfo[] signature, OpenType<?> returnOpenType, int impact)"
title: "OpenMBeanOperationInfoSupport.OpenMBeanOperationInfoSupport"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/OpenMBeanOperationInfoSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OpenMBeanOperationInfoSupport.OpenMBeanOperationInfoSupport

```java
public OpenMBeanOperationInfoSupport(String name, String description, OpenMBeanParameterInfo[] signature, OpenType<?> returnOpenType, int impact)
```

Constructs an `OpenMBeanOperationInfoSupport`
 instance, which describes the operation of a class of open
 MBeans, with the specified `name`, `description`,
 `signature`, `returnOpenType` and `impact`.

 

The `signature` array parameter is internally copied,
 so that subsequent changes to the array referenced by `signature` have no effect on this instance.

**参数**

- **name** — cannot be a null or empty string.
- **description** — cannot be a null or empty string.
- **signature** — can be null or empty if there are no parameters to describe.
- **returnOpenType** — cannot be null: use `SimpleType.VOID` for operations that return nothing.
- **impact** — must be one of `ACTION`, `ACTION_INFO`, `INFO`, or `UNKNOWN`.

**异常**

- **IllegalArgumentException** — if `name` or `description` are null or empty string, or `returnOpenType` is null, or `impact` is not one of `ACTION`, `ACTION_INFO`, `INFO`, or `UNKNOWN`.
- **ArrayStoreException** — If `signature` is not an array of instances of a subclass of `MBeanParameterInfo`.
