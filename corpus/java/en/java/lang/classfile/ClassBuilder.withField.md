---
id: "java-en-function-classbuilder-withfield"
language: "java"
lang: "en"
category: "function"
name: "ClassBuilder.withField"
signature: "ClassBuilder withField(Utf8Entry name, Utf8Entry descriptor, Consumer<? super FieldBuilder> handler)"
title: "ClassBuilder.withField"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/ClassBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassBuilder.withField

```java
ClassBuilder withField(Utf8Entry name, Utf8Entry descriptor, Consumer<? super FieldBuilder> handler)
```

Adds a field.

**参数**

- **name** — the field name
- **descriptor** — the field descriptor string
- **handler** — handler to supply the contents of the field

**返回**

- this builder

**参见**

- FieldModel
