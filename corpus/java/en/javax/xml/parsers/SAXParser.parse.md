---
id: "java-en-function-saxparser-parse"
language: "java"
lang: "en"
category: "function"
name: "SAXParser.parse"
signature: "public void parse(InputStream is, HandlerBase hb) throws SAXException, IOException"
title: "SAXParser.parse"
directive: "method"
module: "java.xml/javax.xml.parsers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/parsers/SAXParser.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SAXParser.parse

```java
public void parse(InputStream is, HandlerBase hb) throws SAXException, IOException
```

Parse the content of the given `java.io.InputStream`
 instance as XML using the specified `org.xml.sax.HandlerBase`.
  Use of the DefaultHandler version of this method is recommended as
 the HandlerBase class has been deprecated in SAX 2.0.

**参数**

- **is** — InputStream containing the content to be parsed.
- **hb** — The SAX HandlerBase to use.

**异常**

- **IllegalArgumentException** — If the given InputStream is null.
- **SAXException** — If parse produces a SAX error.
- **IOException** — If an IO error occurs interacting with the InputStream.

**参见**

- org.xml.sax.DocumentHandler
