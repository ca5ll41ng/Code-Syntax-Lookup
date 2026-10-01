---
id: "java-en-function-attributesimpl-gettype"
language: "java"
lang: "en"
category: "function"
name: "AttributesImpl.getType"
signature: "public String getType (int index)"
title: "AttributesImpl.getType"
directive: "method"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/AttributesImpl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AttributesImpl.getType

```java
public String getType (int index)
```

Return an attribute's type by index.

**参数**

- **index** — The attribute's index (zero-based).

**返回**

- The attribute's type, "CDATA" if the type is unknown, or null if the index is out of bounds.

**参见**

- org.xml.sax.Attributes#getType(int)
