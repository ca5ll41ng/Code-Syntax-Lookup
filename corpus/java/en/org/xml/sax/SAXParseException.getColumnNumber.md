---
id: "java-en-function-saxparseexception-getcolumnnumber"
language: "java"
lang: "en"
category: "function"
name: "SAXParseException.getColumnNumber"
signature: "public int getColumnNumber ()"
title: "SAXParseException.getColumnNumber"
directive: "method"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/SAXParseException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SAXParseException.getColumnNumber

```java
public int getColumnNumber ()
```

The column number of the end of the text where the exception occurred.

 

The first column in a line is position 1.

**返回**

- An integer representing the column number, or -1 if none is available.

**参见**

- org.xml.sax.Locator#getColumnNumber
