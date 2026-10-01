---
id: "java-en-function-attributelist-gettype"
language: "java"
lang: "en"
category: "function"
name: "AttributeList.getType"
signature: "public abstract String getType (int i)"
title: "AttributeList.getType"
directive: "method"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/AttributeList.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AttributeList.getType

```java
public abstract String getType (int i)
```

Return the type of an attribute in the list (by position).

 

The attribute type is one of the strings "CDATA", "ID",
 "IDREF", "IDREFS", "NMTOKEN", "NMTOKENS", "ENTITY", "ENTITIES",
 or "NOTATION" (always in upper case).

 

If the parser has not read a declaration for the attribute,
 or if the parser does not report attribute types, then it must
 return the value "CDATA" as stated in the XML 1.0 Recommentation
 (clause 3.3.3, "Attribute-Value Normalization").

 

For an enumerated attribute that is not a notation, the
 parser will report the type as "NMTOKEN".

**参数**

- **i** — The index of the attribute in the list (starting at 0).

**返回**

- The attribute type as a string, or null if the index is out of range.

**参见**

- #getLength
- #getType(java.lang.String)
