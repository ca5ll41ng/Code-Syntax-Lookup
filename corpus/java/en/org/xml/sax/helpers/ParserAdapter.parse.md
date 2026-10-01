---
id: "java-en-function-parseradapter-parse"
language: "java"
lang: "en"
category: "function"
name: "ParserAdapter.parse"
signature: "public void parse (String systemId) throws IOException, SAXException"
title: "ParserAdapter.parse"
directive: "method"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/ParserAdapter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ParserAdapter.parse

```java
public void parse (String systemId) throws IOException, SAXException
```

Parse an XML document.

**参数**

- **systemId** — The absolute URL of the document.

**异常**

- **java.io.IOException** — If there is a problem reading the raw content of the document.
- **SAXException** — If there is a problem processing the document.

**参见**

- #parse(org.xml.sax.InputSource)
- org.xml.sax.Parser#parse(java.lang.String)
