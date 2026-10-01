---
id: "java-en-function-parseradapter-ignorablewhitespace"
language: "java"
lang: "en"
category: "function"
name: "ParserAdapter.ignorableWhitespace"
signature: "public void ignorableWhitespace (char ch[], int start, int length) throws SAXException"
title: "ParserAdapter.ignorableWhitespace"
directive: "method"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/ParserAdapter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ParserAdapter.ignorableWhitespace

```java
public void ignorableWhitespace (char ch[], int start, int length) throws SAXException
```

Adapter implementation method; do not call.
 Adapt a SAX1 ignorable whitespace event.

**参数**

- **ch** — An array of characters.
- **start** — The starting position in the array.
- **length** — The number of characters to use.

**异常**

- **SAXException** — The client may raise a processing exception.

**参见**

- org.xml.sax.DocumentHandler#ignorableWhitespace
