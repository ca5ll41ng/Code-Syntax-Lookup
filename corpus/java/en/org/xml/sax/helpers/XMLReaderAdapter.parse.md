---
id: "java-en-function-xmlreaderadapter-parse"
language: "java"
lang: "en"
category: "function"
name: "XMLReaderAdapter.parse"
signature: "public void parse (String systemId) throws IOException, SAXException"
title: "XMLReaderAdapter.parse"
directive: "method"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/XMLReaderAdapter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLReaderAdapter.parse

```java
public void parse (String systemId) throws IOException, SAXException
```

Parse the document.

 

This method will throw an exception if the embedded
 XMLReader does not support the
 http://xml.org/sax/features/namespace-prefixes property.

**参数**

- **systemId** — The absolute URL of the document.

**异常**

- **java.io.IOException** — If there is a problem reading the raw content of the document.
- **org.xml.sax.SAXException** — If there is a problem processing the document.

**参见**

- #parse(org.xml.sax.InputSource)
- org.xml.sax.Parser#parse(java.lang.String)
