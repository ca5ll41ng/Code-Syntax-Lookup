---
id: "java-en-function-attributes-putall"
language: "java"
lang: "en"
category: "function"
name: "Attributes.putAll"
signature: "public void putAll(Map<?,?> attr)"
title: "Attributes.putAll"
directive: "method"
module: "java.base/java.util.jar"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/jar/Attributes.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Attributes.putAll

```java
public void putAll(Map<?,?> attr)
```

Copies all of the attribute name-value mappings from the specified
 Attributes to this Map. Duplicate mappings will be replaced.

**参数**

- **attr** — the Attributes to be stored in this map

**异常**

- **ClassCastException** — if attr is not an Attributes
