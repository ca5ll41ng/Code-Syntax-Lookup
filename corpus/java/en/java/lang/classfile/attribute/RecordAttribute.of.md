---
id: "java-en-function-recordattribute-of"
language: "java"
lang: "en"
category: "function"
name: "RecordAttribute.of"
signature: "static RecordAttribute of(List<RecordComponentInfo> components)"
title: "RecordAttribute.of"
directive: "method"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/RecordAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RecordAttribute.of

```java
static RecordAttribute of(List<RecordComponentInfo> components)
```

{@return a `Record` attribute}

**参数**

- **components** — the record components

**异常**

- **IllegalArgumentException** — if the number of record components exceeds the limit of `#u2 u2`
