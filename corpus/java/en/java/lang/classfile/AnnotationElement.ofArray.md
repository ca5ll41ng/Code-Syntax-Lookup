---
id: "java-en-function-annotationelement-ofarray"
language: "java"
lang: "en"
category: "function"
name: "AnnotationElement.ofArray"
signature: "static AnnotationElement ofArray(String name, AnnotationValue... values)"
title: "AnnotationElement.ofArray"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/AnnotationElement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AnnotationElement.ofArray

```java
static AnnotationElement ofArray(String name, AnnotationValue... values)
```

{@return an element-value pair for an array-valued element}

**参数**

- **name** — the name of the key
- **values** — the associated values

**异常**

- **IllegalArgumentException** — if the number of associated values exceeds the limit of `#u2 u2`

**参见**

- AnnotationValue#ofArray(AnnotationValue...) AnnotationValue::ofArray
