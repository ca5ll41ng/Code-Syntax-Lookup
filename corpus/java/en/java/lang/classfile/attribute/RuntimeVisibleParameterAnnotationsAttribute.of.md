---
id: "java-en-function-runtimevisibleparameterannotationsattribute-of"
language: "java"
lang: "en"
category: "function"
name: "RuntimeVisibleParameterAnnotationsAttribute.of"
signature: "static RuntimeVisibleParameterAnnotationsAttribute of(List<List<Annotation>> parameterAnnotations)"
title: "RuntimeVisibleParameterAnnotationsAttribute.of"
directive: "method"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/RuntimeVisibleParameterAnnotationsAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RuntimeVisibleParameterAnnotationsAttribute.of

```java
static RuntimeVisibleParameterAnnotationsAttribute of(List<List<Annotation>> parameterAnnotations)
```

{@return a `RuntimeVisibleParameterAnnotations` attribute}
 The `parameterAnnotations` list should not be truncated, and must
 have a length equal to the number of formal parameters; elements for
 unannotated parameters may be empty, but may not be omitted.  It may omit
 some synthetic or implicit parameters.

**参数**

- **parameterAnnotations** — a list of run-time visible annotations for each parameter

**异常**

- **IllegalArgumentException** — if the number of parameters exceeds the limit of `#u1 u1`, or the number of annotations on any parameter exceeds the limit of `#u2 u2`
