---
id: "java-en-function-runtimevisibletypeannotationsattribute-of"
language: "java"
lang: "en"
category: "function"
name: "RuntimeVisibleTypeAnnotationsAttribute.of"
signature: "static RuntimeVisibleTypeAnnotationsAttribute of(List<TypeAnnotation> annotations)"
title: "RuntimeVisibleTypeAnnotationsAttribute.of"
directive: "method"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/RuntimeVisibleTypeAnnotationsAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RuntimeVisibleTypeAnnotationsAttribute.of

```java
static RuntimeVisibleTypeAnnotationsAttribute of(List<TypeAnnotation> annotations)
```

{@return a `RuntimeVisibleTypeAnnotations` attribute}

**参数**

- **annotations** — the annotations

**异常**

- **IllegalArgumentException** — if the number of annotations exceeds the limit of `#u2 u2`
