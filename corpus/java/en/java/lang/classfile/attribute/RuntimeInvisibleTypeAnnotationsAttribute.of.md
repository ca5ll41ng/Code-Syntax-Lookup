---
id: "java-en-function-runtimeinvisibletypeannotationsattribute-of"
language: "java"
lang: "en"
category: "function"
name: "RuntimeInvisibleTypeAnnotationsAttribute.of"
signature: "static RuntimeInvisibleTypeAnnotationsAttribute of(List<TypeAnnotation> annotations)"
title: "RuntimeInvisibleTypeAnnotationsAttribute.of"
directive: "method"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/RuntimeInvisibleTypeAnnotationsAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RuntimeInvisibleTypeAnnotationsAttribute.of

```java
static RuntimeInvisibleTypeAnnotationsAttribute of(List<TypeAnnotation> annotations)
```

{@return a `RuntimeInvisibleTypeAnnotations` attribute}

**参数**

- **annotations** — the annotations

**异常**

- **IllegalArgumentException** — if the number of annotations exceeds the limit of `#u2 u2`
