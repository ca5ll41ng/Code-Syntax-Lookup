---
id: "java-en-function-annotation-of"
language: "java"
lang: "en"
category: "function"
name: "Annotation.of"
signature: "static Annotation of(Utf8Entry annotationClass, List<AnnotationElement> elements)"
title: "Annotation.of"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/Annotation.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Annotation.of

```java
static Annotation of(Utf8Entry annotationClass, List<AnnotationElement> elements)
```

{@return an annotation}

**参数**

- **annotationClass** — the constant pool entry holding the descriptor string of the annotation interface
- **elements** — the element-value pairs of the annotation

**异常**

- **IllegalArgumentException** — if the number of pairs exceeds the limit of `#u2 u2`
