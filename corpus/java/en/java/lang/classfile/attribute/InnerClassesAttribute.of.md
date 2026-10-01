---
id: "java-en-function-innerclassesattribute-of"
language: "java"
lang: "en"
category: "function"
name: "InnerClassesAttribute.of"
signature: "static InnerClassesAttribute of(List<InnerClassInfo> innerClasses)"
title: "InnerClassesAttribute.of"
directive: "method"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/InnerClassesAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InnerClassesAttribute.of

```java
static InnerClassesAttribute of(List<InnerClassInfo> innerClasses)
```

{@return an `InnerClasses` attribute}

**参数**

- **innerClasses** — descriptions of the nested classes

**异常**

- **IllegalArgumentException** — if the number of descriptions exceeds the limit of `#u2 u2`
