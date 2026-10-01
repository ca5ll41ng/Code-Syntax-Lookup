---
id: "java-en-function-attributes2-isspecified"
language: "java"
lang: "en"
category: "function"
name: "Attributes2.isSpecified"
signature: "public boolean isSpecified (int index)"
title: "Attributes2.isSpecified"
directive: "method"
module: "java.xml/org.xml.sax.ext"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/ext/Attributes2.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Attributes2.isSpecified

```java
public boolean isSpecified (int index)
```

Returns true unless the attribute value was provided
 by DTD defaulting.

**参数**

- **index** — The attribute index (zero-based).

**返回**

- true if the value was found in the XML text, false if the value was provided by DTD defaulting.

**异常**

- **java.lang.ArrayIndexOutOfBoundsException** — When the supplied index does not identify an attribute.
