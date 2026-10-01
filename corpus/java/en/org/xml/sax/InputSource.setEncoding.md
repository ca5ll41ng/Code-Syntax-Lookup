---
id: "java-en-function-inputsource-setencoding"
language: "java"
lang: "en"
category: "function"
name: "InputSource.setEncoding"
signature: "public void setEncoding (String encoding)"
title: "InputSource.setEncoding"
directive: "method"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/InputSource.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InputSource.setEncoding

```java
public void setEncoding (String encoding)
```

Set the character encoding, if known.

 

The encoding must be a string acceptable for an
 XML encoding declaration (see section 4.3.3 of the XML 1.0
 recommendation).

 

This method has no effect when the application provides a
 character stream.

**参数**

- **encoding** — A string describing the character encoding.

**参见**

- #setSystemId
- #setByteStream
- #getEncoding
