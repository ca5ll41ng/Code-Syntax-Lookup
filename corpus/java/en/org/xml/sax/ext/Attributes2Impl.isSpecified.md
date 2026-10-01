---
id: "java-en-function-attributes2impl-isspecified"
language: "java"
lang: "en"
category: "function"
name: "Attributes2Impl.isSpecified"
signature: "public boolean isSpecified (int index)"
title: "Attributes2Impl.isSpecified"
directive: "method"
module: "java.xml/org.xml.sax.ext"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/ext/Attributes2Impl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Attributes2Impl.isSpecified

```java
public boolean isSpecified (int index)
```

Returns the current value of an attribute's "specified" flag.

**参数**

- **index** — The attribute index (zero-based).

**返回**

- current flag value

**异常**

- **java.lang.ArrayIndexOutOfBoundsException** — When the supplied index does not identify an attribute.
