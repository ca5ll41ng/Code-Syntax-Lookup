---
id: "java-en-function-attributesimpl-getqname"
language: "java"
lang: "en"
category: "function"
name: "AttributesImpl.getQName"
signature: "public String getQName (int index)"
title: "AttributesImpl.getQName"
directive: "method"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/AttributesImpl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AttributesImpl.getQName

```java
public String getQName (int index)
```

Return an attribute's qualified (prefixed) name.

**参数**

- **index** — The attribute's index (zero-based).

**返回**

- The attribute's qualified name, the empty string if none is available, or null if the index is out of bounds.

**参见**

- org.xml.sax.Attributes#getQName
