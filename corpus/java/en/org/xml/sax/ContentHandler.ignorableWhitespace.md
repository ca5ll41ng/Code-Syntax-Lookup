---
id: "java-en-function-contenthandler-ignorablewhitespace"
language: "java"
lang: "en"
category: "function"
name: "ContentHandler.ignorableWhitespace"
signature: "public void ignorableWhitespace (char ch[], int start, int length) throws SAXException"
title: "ContentHandler.ignorableWhitespace"
directive: "method"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/ContentHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ContentHandler.ignorableWhitespace

```java
public void ignorableWhitespace (char ch[], int start, int length) throws SAXException
```

Receive notification of ignorable whitespace in element content.

 

Validating Parsers must use this method to report each chunk
 of whitespace in element content (see the W3C XML 1.0
 recommendation, section 2.10): non-validating parsers may also
 use this method if they are capable of parsing and using
 content models.

 

SAX parsers may return all contiguous whitespace in a single
 chunk, or they may split it into several chunks; however, all of
 the characters in any single event must come from the same
 external entity, so that the Locator provides useful
 information.

 

The application must not attempt to read from the array
 outside of the specified range.

**参数**

- **ch** — the characters from the XML document
- **start** — the start position in the array
- **length** — the number of characters to read from the array

**异常**

- **org.xml.sax.SAXException** — any SAX exception, possibly wrapping another exception

**参见**

- #characters
