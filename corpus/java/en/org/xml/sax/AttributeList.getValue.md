---
id: "java-en-function-attributelist-getvalue"
language: "java"
lang: "en"
category: "function"
name: "AttributeList.getValue"
signature: "public abstract String getValue (int i)"
title: "AttributeList.getValue"
directive: "method"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/AttributeList.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AttributeList.getValue

```java
public abstract String getValue (int i)
```

Return the value of an attribute in the list (by position).

 

If the attribute value is a list of tokens (IDREFS,
 ENTITIES, or NMTOKENS), the tokens will be concatenated
 into a single string separated by whitespace.

**参数**

- **i** — The index of the attribute in the list (starting at 0).

**返回**

- The attribute value as a string, or null if the index is out of range.

**参见**

- #getLength
- #getValue(java.lang.String)
