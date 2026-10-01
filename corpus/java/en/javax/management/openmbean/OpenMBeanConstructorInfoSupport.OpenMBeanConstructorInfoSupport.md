---
id: "java-en-function-openmbeanconstructorinfosupport-openmbeanconstructorinfosupport"
language: "java"
lang: "en"
category: "function"
name: "OpenMBeanConstructorInfoSupport.OpenMBeanConstructorInfoSupport"
signature: "public OpenMBeanConstructorInfoSupport(String name, String description, OpenMBeanParameterInfo[] signature)"
title: "OpenMBeanConstructorInfoSupport.OpenMBeanConstructorInfoSupport"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/OpenMBeanConstructorInfoSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OpenMBeanConstructorInfoSupport.OpenMBeanConstructorInfoSupport

```java
public OpenMBeanConstructorInfoSupport(String name, String description, OpenMBeanParameterInfo[] signature)
```

Constructs an `OpenMBeanConstructorInfoSupport`
 instance, which describes the constructor of a class of open
 MBeans with the specified `name`, `description` and
 `signature`.

 

The `signature` array parameter is internally copied,
 so that subsequent changes to the array referenced by `signature` have no effect on this instance.

**参数**

- **name** — cannot be a null or empty string.
- **description** — cannot be a null or empty string.
- **signature** — can be null or empty if there are no parameters to describe.

**异常**

- **IllegalArgumentException** — if `name` or `description` are null or empty string.
- **ArrayStoreException** — If `signature` is not an array of instances of a subclass of `MBeanParameterInfo`.
