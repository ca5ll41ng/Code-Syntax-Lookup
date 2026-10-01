---
id: "java-en-function-attributemapperoption-of"
language: "java"
lang: "en"
category: "function"
name: "AttributeMapperOption.of"
signature: "static AttributeMapperOption of(Function<Utf8Entry, AttributeMapper<?>> attributeMapper)"
title: "AttributeMapperOption.of"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/ClassFile.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AttributeMapperOption.of

```java
static AttributeMapperOption of(Function<Utf8Entry, AttributeMapper<?>> attributeMapper)
```

{@return an option describing user-defined attributes for parsing}

**参数**

- **attributeMapper** — a function mapping attribute names to attribute mappers
