---
id: "java-en-function-annotationvalue-tag"
language: "java"
lang: "en"
category: "function"
name: "AnnotationValue.tag"
signature: "int tag()"
title: "AnnotationValue.tag"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/AnnotationValue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AnnotationValue.tag

```java
int tag()
```

{@return the tag character for this value as per JVMS {@jvms 4.7.16.1}}
 The tag characters have a one-to-one mapping to the types of annotation element values.

 `TAG_`-prefixed constants in this class, such as `TAG_INT`,
 describe the possible return values of this method.  The return type is
 `int` for consistency with union indicator items in other union
 structures in the `class` file format.
