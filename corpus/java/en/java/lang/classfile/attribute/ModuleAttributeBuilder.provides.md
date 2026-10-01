---
id: "java-en-function-moduleattributebuilder-provides"
language: "java"
lang: "en"
category: "function"
name: "ModuleAttributeBuilder.provides"
signature: "ModuleAttributeBuilder provides(ClassDesc service, ClassDesc... implClasses)"
title: "ModuleAttributeBuilder.provides"
directive: "method"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/ModuleAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModuleAttributeBuilder.provides

```java
ModuleAttributeBuilder provides(ClassDesc service, ClassDesc... implClasses)
```

Declares provision of a service.

**参数**

- **service** — the service class provided
- **implClasses** — the implementation classes

**返回**

- this builder

**异常**

- **IllegalArgumentException** — if `service` or any of the `implClasses` represents a primitive type, or the number of implementations exceeds the limit of `#u2 u2`
