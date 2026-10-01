---
id: "java-en-function-runtimevisibleannotationsattribute-of"
language: "java"
lang: "en"
category: "function"
name: "RuntimeVisibleAnnotationsAttribute.of"
signature: "static RuntimeVisibleAnnotationsAttribute of(List<Annotation> annotations)"
title: "RuntimeVisibleAnnotationsAttribute.of"
directive: "method"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/RuntimeVisibleAnnotationsAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RuntimeVisibleAnnotationsAttribute.of

```java
static RuntimeVisibleAnnotationsAttribute of(List<Annotation> annotations)
```

{@return a `RuntimeVisibleAnnotations` attribute}

**参数**

- **annotations** — the annotations

**异常**

- **IllegalArgumentException** — if the number of annotations exceeds the limit of `#u2 u2`
