---
id: "java-en-function-defaulthandler-setdocumentlocator"
language: "java"
lang: "en"
category: "function"
name: "DefaultHandler.setDocumentLocator"
signature: "public void setDocumentLocator (Locator locator)"
title: "DefaultHandler.setDocumentLocator"
directive: "method"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/DefaultHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DefaultHandler.setDocumentLocator

```java
public void setDocumentLocator (Locator locator)
```

Receive a Locator object for document events.

 

By default, do nothing.  Application writers may override this
 method in a subclass if they wish to store the locator for use
 with other document events.

**参数**

- **locator** — A locator for all SAX document events.

**参见**

- org.xml.sax.ContentHandler#setDocumentLocator
- org.xml.sax.Locator
