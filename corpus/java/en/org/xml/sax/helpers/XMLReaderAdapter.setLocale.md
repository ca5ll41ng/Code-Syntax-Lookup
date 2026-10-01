---
id: "java-en-function-xmlreaderadapter-setlocale"
language: "java"
lang: "en"
category: "function"
name: "XMLReaderAdapter.setLocale"
signature: "public void setLocale (Locale locale) throws SAXException"
title: "XMLReaderAdapter.setLocale"
directive: "method"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/XMLReaderAdapter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLReaderAdapter.setLocale

```java
public void setLocale (Locale locale) throws SAXException
```

Set the locale for error reporting.

 

This is not supported in SAX2, and will always throw
 an exception.

**参数**

- **locale** — the locale for error reporting.

**异常**

- **org.xml.sax.SAXException** — Thrown unless overridden.

**参见**

- org.xml.sax.Parser#setLocale
