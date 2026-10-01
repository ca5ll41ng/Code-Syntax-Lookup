---
id: "java-en-function-recordcomponentinfo-of"
language: "java"
lang: "en"
category: "function"
name: "RecordComponentInfo.of"
signature: "static RecordComponentInfo of(Utf8Entry name, Utf8Entry descriptor, List<Attribute<?>> attributes)"
title: "RecordComponentInfo.of"
directive: "method"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/RecordComponentInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RecordComponentInfo.of

```java
static RecordComponentInfo of(Utf8Entry name, Utf8Entry descriptor, List<Attribute<?>> attributes)
```

{@return a record component description}

**参数**

- **name** — the component name
- **descriptor** — the component field descriptor string
- **attributes** — the component attributes

**异常**

- **IllegalArgumentException** — if the number of attributes exceeds the limit of `#u2 u2`
