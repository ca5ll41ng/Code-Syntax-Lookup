---
id: "java-en-function-attributes-getqname"
language: "java"
lang: "en"
category: "function"
name: "Attributes.getQName"
signature: "public abstract String getQName (int index)"
title: "Attributes.getQName"
directive: "method"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/Attributes.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Attributes.getQName

```java
public abstract String getQName (int index)
```

Look up an attribute's XML qualified (prefixed) name by index.

**参数**

- **index** — The attribute index (zero-based).

**返回**

- The XML qualified name, or the empty string if none is available, or null if the index is out of range.

**参见**

- #getLength
