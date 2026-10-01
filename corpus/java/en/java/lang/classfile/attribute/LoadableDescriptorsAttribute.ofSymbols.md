---
id: "java-en-function-loadabledescriptorsattribute-ofsymbols"
language: "java"
lang: "en"
category: "function"
name: "LoadableDescriptorsAttribute.ofSymbols"
signature: "static LoadableDescriptorsAttribute ofSymbols(List<ClassDesc> loadableDescriptors)"
title: "LoadableDescriptorsAttribute.ofSymbols"
directive: "method"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/LoadableDescriptorsAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LoadableDescriptorsAttribute.ofSymbols

```java
static LoadableDescriptorsAttribute ofSymbols(List<ClassDesc> loadableDescriptors)
```

{@return a `LoadableDescriptors` attribute}

**参数**

- **loadableDescriptors** — the loadable descriptors

**异常**

- **IllegalArgumentException** — if the number of loadable descriptors exceeds the limit of `#u2 u2`
