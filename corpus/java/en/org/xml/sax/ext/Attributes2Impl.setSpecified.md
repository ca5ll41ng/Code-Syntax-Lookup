---
id: "java-en-function-attributes2impl-setspecified"
language: "java"
lang: "en"
category: "function"
name: "Attributes2Impl.setSpecified"
signature: "public void setSpecified (int index, boolean value)"
title: "Attributes2Impl.setSpecified"
directive: "method"
module: "java.xml/org.xml.sax.ext"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/ext/Attributes2Impl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Attributes2Impl.setSpecified

```java
public void setSpecified (int index, boolean value)
```

Assign a value to the "specified" flag of a specific attribute.
 This is the only way this flag can be cleared, except clearing
 by initialization with the copy constructor.

**参数**

- **index** — The index of the attribute (zero-based).
- **value** — The desired flag value.

**异常**

- **java.lang.ArrayIndexOutOfBoundsException** — When the supplied index does not identify an attribute.
