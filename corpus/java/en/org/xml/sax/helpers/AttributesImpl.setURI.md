---
id: "java-en-function-attributesimpl-seturi"
language: "java"
lang: "en"
category: "function"
name: "AttributesImpl.setURI"
signature: "public void setURI (int index, String uri)"
title: "AttributesImpl.setURI"
directive: "method"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/AttributesImpl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AttributesImpl.setURI

```java
public void setURI (int index, String uri)
```

Set the Namespace URI of a specific attribute.

**参数**

- **index** — The index of the attribute (zero-based).
- **uri** — The attribute's Namespace URI, or the empty string for none.

**异常**

- **java.lang.ArrayIndexOutOfBoundsException** — When the supplied index does not point to an attribute in the list.
