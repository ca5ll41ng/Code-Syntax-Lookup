---
id: "java-en-function-attributes2impl-setdeclared"
language: "java"
lang: "en"
category: "function"
name: "Attributes2Impl.setDeclared"
signature: "public void setDeclared (int index, boolean value)"
title: "Attributes2Impl.setDeclared"
directive: "method"
module: "java.xml/org.xml.sax.ext"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/ext/Attributes2Impl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Attributes2Impl.setDeclared

```java
public void setDeclared (int index, boolean value)
```

Assign a value to the "declared" flag of a specific attribute.
 This is normally needed only for attributes of type CDATA,
 including attributes whose type is changed to or from CDATA.

**参数**

- **index** — The index of the attribute (zero-based).
- **value** — The desired flag value.

**异常**

- **java.lang.ArrayIndexOutOfBoundsException** — When the supplied index does not identify an attribute.

**参见**

- #setType
