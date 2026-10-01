---
id: "java-en-function-runtimeinvisibleannotationsattribute-of"
language: "java"
lang: "en"
category: "function"
name: "RuntimeInvisibleAnnotationsAttribute.of"
signature: "static RuntimeInvisibleAnnotationsAttribute of(List<Annotation> annotations)"
title: "RuntimeInvisibleAnnotationsAttribute.of"
directive: "method"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/RuntimeInvisibleAnnotationsAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RuntimeInvisibleAnnotationsAttribute.of

```java
static RuntimeInvisibleAnnotationsAttribute of(List<Annotation> annotations)
```

{@return a `RuntimeInvisibleAnnotations` attribute}

**参数**

- **annotations** — the annotations

**异常**

- **IllegalArgumentException** — if the number of annotations exceeds the limit of `#u2 u2`
