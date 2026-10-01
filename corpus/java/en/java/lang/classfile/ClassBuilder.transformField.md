---
id: "java-en-function-classbuilder-transformfield"
language: "java"
lang: "en"
category: "function"
name: "ClassBuilder.transformField"
signature: "ClassBuilder transformField(FieldModel field, FieldTransform transform)"
title: "ClassBuilder.transformField"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/ClassBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassBuilder.transformField

```java
ClassBuilder transformField(FieldModel field, FieldTransform transform)
```

Adds a field by transforming a field from another class.
 

 This method behaves as if:
 {@snippet lang=java :
 // @link substring=withField target="#withField(Utf8Entry, Utf8Entry, Consumer)" :
 withField(field.fieldName(), field.fieldType(),
           fb -> fb.transform(field, transform)) // @link regex="transform(?=\()" target="FieldBuilder#transform"
 }

**参数**

- **field** — the field to be transformed
- **transform** — the transform to apply to the field

**返回**

- this builder

**参见**

- FieldTransform
