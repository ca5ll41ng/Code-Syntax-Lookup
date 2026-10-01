---
id: "java-en-function-attributes-getindex"
language: "java"
lang: "en"
category: "function"
name: "Attributes.getIndex"
signature: "public int getIndex (String uri, String localName)"
title: "Attributes.getIndex"
directive: "method"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/Attributes.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Attributes.getIndex

```java
public int getIndex (String uri, String localName)
```

Look up the index of an attribute by Namespace name.

**参数**

- **uri** — The Namespace URI, or the empty string if the name has no Namespace URI.
- **localName** — The attribute's local name.

**返回**

- The index of the attribute, or -1 if it does not appear in the list.
