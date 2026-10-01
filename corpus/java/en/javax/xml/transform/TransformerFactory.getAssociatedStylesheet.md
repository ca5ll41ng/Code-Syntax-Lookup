---
id: "java-en-function-transformerfactory-getassociatedstylesheet"
language: "java"
lang: "en"
category: "function"
name: "TransformerFactory.getAssociatedStylesheet"
signature: "public abstract Source getAssociatedStylesheet( Source source, String media, String title, String charset) throws TransformerConfigurationException"
title: "TransformerFactory.getAssociatedStylesheet"
directive: "method"
module: "java.xml/javax.xml.transform"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/TransformerFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TransformerFactory.getAssociatedStylesheet

```java
public abstract Source getAssociatedStylesheet( Source source, String media, String title, String charset) throws TransformerConfigurationException
```

Get the stylesheet specification(s) associated with the
 XML `Source` document via the
 
 xml-stylesheet processing instruction that match the given criteria.
 Note that it is possible to return several stylesheets, in which case
 they are applied as if they were a list of imports or cascades in a
 single stylesheet.

**参数**

- **source** — The XML source document.
- **media** — The media attribute to be matched.  May be null, in which case the preferred templates will be used (i.e. alternate = no).
- **title** — The value of the title attribute to match.  May be null.
- **charset** — The value of the charset attribute to match.  May be null.

**返回**

- A `Source` `Object` suitable for passing to the `TransformerFactory`.

**异常**

- **TransformerConfigurationException** — An `Exception` is thrown if an error occurings during parsing of the `source`.

**参见**

- Associating Style Sheets with XML documents Version 1.0
