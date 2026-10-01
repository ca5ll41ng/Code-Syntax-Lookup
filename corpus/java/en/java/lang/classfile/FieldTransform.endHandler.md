---
id: "java-en-function-fieldtransform-endhandler"
language: "java"
lang: "en"
category: "function"
name: "FieldTransform.endHandler"
signature: "static FieldTransform endHandler(Consumer<FieldBuilder> finisher)"
title: "FieldTransform.endHandler"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/FieldTransform.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FieldTransform.endHandler

```java
static FieldTransform endHandler(Consumer<FieldBuilder> finisher)
```

Creates a field transform that passes each element through to the builder,
 and calls the specified function when transformation is complete.

**参数**

- **finisher** — the function to call when transformation is complete

**返回**

- the field transform
