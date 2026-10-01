---
id: "java-en-function-attributesimpl-settype"
language: "java"
lang: "en"
category: "function"
name: "AttributesImpl.setType"
signature: "public void setType (int index, String type)"
title: "AttributesImpl.setType"
directive: "method"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/AttributesImpl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AttributesImpl.setType

```java
public void setType (int index, String type)
```

Set the type of a specific attribute.

**参数**

- **index** — The index of the attribute (zero-based).
- **type** — The attribute's type.

**异常**

- **java.lang.ArrayIndexOutOfBoundsException** — When the supplied index does not point to an attribute in the list.
