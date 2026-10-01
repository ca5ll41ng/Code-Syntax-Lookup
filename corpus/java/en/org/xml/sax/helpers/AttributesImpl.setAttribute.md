---
id: "java-en-function-attributesimpl-setattribute"
language: "java"
lang: "en"
category: "function"
name: "AttributesImpl.setAttribute"
signature: "public void setAttribute (int index, String uri, String localName, String qName, String type, String value)"
title: "AttributesImpl.setAttribute"
directive: "method"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/AttributesImpl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AttributesImpl.setAttribute

```java
public void setAttribute (int index, String uri, String localName, String qName, String type, String value)
```

Set an attribute in the list.

 

For the sake of speed, this method does no checking
 for name conflicts or well-formedness: such checks are the
 responsibility of the application.

**参数**

- **index** — The index of the attribute (zero-based).
- **uri** — The Namespace URI, or the empty string if none is available or Namespace processing is not being performed.
- **localName** — The local name, or the empty string if Namespace processing is not being performed.
- **qName** — The qualified name, or the empty string if qualified names are not available.
- **type** — The attribute type as a string.
- **value** — The attribute value.

**异常**

- **java.lang.ArrayIndexOutOfBoundsException** — When the supplied index does not point to an attribute in the list.
