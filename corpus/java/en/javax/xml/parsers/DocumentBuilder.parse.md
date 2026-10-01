---
id: "java-en-function-documentbuilder-parse"
language: "java"
lang: "en"
category: "function"
name: "DocumentBuilder.parse"
signature: "public Document parse(InputStream is) throws SAXException, IOException"
title: "DocumentBuilder.parse"
directive: "method"
module: "java.xml/javax.xml.parsers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/parsers/DocumentBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DocumentBuilder.parse

```java
public Document parse(InputStream is) throws SAXException, IOException
```

Parse the content of the given InputStream as an XML
 document and return a new DOM `Document` object.
 An IllegalArgumentException is thrown if the
 InputStream is null.

**参数**

- **is** — InputStream containing the content to be parsed.

**返回**

- Document result of parsing the InputStream

**异常**

- **IOException** — If any IO errors occur.
- **SAXException** — If any parse errors occur.
- **IllegalArgumentException** — When is is null

**参见**

- org.xml.sax.DocumentHandler
