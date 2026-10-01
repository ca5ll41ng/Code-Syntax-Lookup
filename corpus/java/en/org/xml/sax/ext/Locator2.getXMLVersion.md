---
id: "java-en-function-locator2-getxmlversion"
language: "java"
lang: "en"
category: "function"
name: "Locator2.getXMLVersion"
signature: "public String getXMLVersion ()"
title: "Locator2.getXMLVersion"
directive: "method"
module: "java.xml/org.xml.sax.ext"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/ext/Locator2.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Locator2.getXMLVersion

```java
public String getXMLVersion ()
```

Returns the version of XML used for the entity.  This will
 normally be the identifier from the current entity's
 &lt;?xml&nbsp;version='...'&nbsp;...?&gt; declaration,
 or be defaulted by the parser.

**返回**

- Identifier for the XML version being used to interpret the entity's text, or null if that information is not yet available in the current parsing state.
