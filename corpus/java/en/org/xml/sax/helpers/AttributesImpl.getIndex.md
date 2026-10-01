---
id: "java-en-function-attributesimpl-getindex"
language: "java"
lang: "en"
category: "function"
name: "AttributesImpl.getIndex"
signature: "public int getIndex (String uri, String localName)"
title: "AttributesImpl.getIndex"
directive: "method"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/AttributesImpl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AttributesImpl.getIndex

```java
public int getIndex (String uri, String localName)
```

Look up an attribute's index by Namespace name.

 

In many cases, it will be more efficient to look up the name once and
 use the index query methods rather than using the name query methods
 repeatedly.

**参数**

- **uri** — The attribute's Namespace URI, or the empty string if none is available.
- **localName** — The attribute's local name.

**返回**

- The attribute's index, or -1 if none matches.

**参见**

- org.xml.sax.Attributes#getIndex(java.lang.String,java.lang.String)
