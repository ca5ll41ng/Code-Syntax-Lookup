---
id: "java-en-function-moduleattributebuilder-uses"
language: "java"
lang: "en"
category: "function"
name: "ModuleAttributeBuilder.uses"
signature: "ModuleAttributeBuilder uses(ClassDesc service)"
title: "ModuleAttributeBuilder.uses"
directive: "method"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/ModuleAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModuleAttributeBuilder.uses

```java
ModuleAttributeBuilder uses(ClassDesc service)
```

Declares use of a service.

**参数**

- **service** — the service class used

**返回**

- this builder

**异常**

- **IllegalArgumentException** — if `service` represents a primitive type
