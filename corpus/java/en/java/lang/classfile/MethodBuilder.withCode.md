---
id: "java-en-function-methodbuilder-withcode"
language: "java"
lang: "en"
category: "function"
name: "MethodBuilder.withCode"
signature: "MethodBuilder withCode(Consumer<? super CodeBuilder> code)"
title: "MethodBuilder.withCode"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/MethodBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodBuilder.withCode

```java
MethodBuilder withCode(Consumer<? super CodeBuilder> code)
```

Build the method body for this method.

**参数**

- **code** — a handler receiving a `CodeBuilder`

**返回**

- this builder

**参见**

- CodeModel
