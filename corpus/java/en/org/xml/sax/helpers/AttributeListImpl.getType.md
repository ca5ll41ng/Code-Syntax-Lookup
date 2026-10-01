---
id: "java-en-function-attributelistimpl-gettype"
language: "java"
lang: "en"
category: "function"
name: "AttributeListImpl.getType"
signature: "public String getType (int i)"
title: "AttributeListImpl.getType"
directive: "method"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/AttributeListImpl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AttributeListImpl.getType

```java
public String getType (int i)
```

Get the type of an attribute (by position).

**参数**

- **i** — The position of the attribute in the list.

**返回**

- The attribute type as a string ("NMTOKEN" for an enumeration, and "CDATA" if no declaration was read), or null if there is no attribute at that position.

**参见**

- org.xml.sax.AttributeList#getType(int)
