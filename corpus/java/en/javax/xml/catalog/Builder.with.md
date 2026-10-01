---
id: "java-en-function-builder-with"
language: "java"
lang: "en"
category: "function"
name: "Builder.with"
signature: "public Builder with(Feature feature, String value)"
title: "Builder.with"
directive: "method"
module: "java.xml/javax.xml.catalog"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/catalog/CatalogFeatures.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Builder.with

```java
public Builder with(Feature feature, String value)
```

Sets the value to a specified Feature.

**参数**

- **feature** — the Feature to be set
- **value** — the value to be set for the Feature

**返回**

- this Builder instance

**异常**

- **IllegalArgumentException** — if the value is not valid for the Feature or has the wrong syntax for the `javax.xml.catalog.files` property
