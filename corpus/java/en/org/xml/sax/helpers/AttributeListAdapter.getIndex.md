---
id: "java-en-function-attributelistadapter-getindex"
language: "java"
lang: "en"
category: "function"
name: "AttributeListAdapter.getIndex"
signature: "public int getIndex (String uri, String localName)"
title: "AttributeListAdapter.getIndex"
directive: "method"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/ParserAdapter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AttributeListAdapter.getIndex

```java
public int getIndex (String uri, String localName)
```

Look up an attribute index by Namespace name.

**参数**

- **uri** — The Namespace URI or the empty string.
- **localName** — The local name.

**返回**

- The attributes index, or -1 if none was found.

**参见**

- org.xml.sax.Attributes#getIndex(java.lang.String,java.lang.String)
