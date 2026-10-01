---
id: "java-en-function-attributes-synthetic"
language: "java"
lang: "en"
category: "function"
name: "Attributes.synthetic"
signature: "public static AttributeMapper<SyntheticAttribute> synthetic()"
title: "Attributes.synthetic"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/Attributes.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Attributes.synthetic

```java
public static AttributeMapper<SyntheticAttribute> synthetic()
```

{@return the mapper for the `Synthetic` attribute}
 The mapper permits multiple instances in a given location.
 This has `STATELESS no data dependency`.
