---
id: "java-en-function-attributesimpl-getlocalname"
language: "java"
lang: "en"
category: "function"
name: "AttributesImpl.getLocalName"
signature: "public String getLocalName (int index)"
title: "AttributesImpl.getLocalName"
directive: "method"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/AttributesImpl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AttributesImpl.getLocalName

```java
public String getLocalName (int index)
```

Return an attribute's local name.

**参数**

- **index** — The attribute's index (zero-based).

**返回**

- The attribute's local name, the empty string if none is available, or null if the index if out of range.

**参见**

- org.xml.sax.Attributes#getLocalName
