---
id: "java-en-function-localvariabletypetableattribute-of"
language: "java"
lang: "en"
category: "function"
name: "LocalVariableTypeTableAttribute.of"
signature: "static LocalVariableTypeTableAttribute of(List<LocalVariableTypeInfo> locals)"
title: "LocalVariableTypeTableAttribute.of"
directive: "method"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/LocalVariableTypeTableAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LocalVariableTypeTableAttribute.of

```java
static LocalVariableTypeTableAttribute of(List<LocalVariableTypeInfo> locals)
```

{@return a `LocalVariableTypeTable` attribute}

**参数**

- **locals** — the local variable descriptions

**异常**

- **IllegalArgumentException** — if the number of descriptions exceeds the limit of `#u2 u2`
