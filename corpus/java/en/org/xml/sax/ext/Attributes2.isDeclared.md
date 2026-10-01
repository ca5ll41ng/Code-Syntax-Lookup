---
id: "java-en-function-attributes2-isdeclared"
language: "java"
lang: "en"
category: "function"
name: "Attributes2.isDeclared"
signature: "public boolean isDeclared (int index)"
title: "Attributes2.isDeclared"
directive: "method"
module: "java.xml/org.xml.sax.ext"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/ext/Attributes2.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Attributes2.isDeclared

```java
public boolean isDeclared (int index)
```

Returns false unless the attribute was declared in the DTD.
 This helps distinguish two kinds of attributes that SAX reports
 as CDATA:  ones that were declared (and hence are usually valid),
 and those that were not (and which are never valid).

**参数**

- **index** — The attribute index (zero-based).

**返回**

- true if the attribute was declared in the DTD, false otherwise.

**异常**

- **java.lang.ArrayIndexOutOfBoundsException** — When the supplied index does not identify an attribute.
