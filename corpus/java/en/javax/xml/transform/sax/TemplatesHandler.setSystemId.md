---
id: "java-en-function-templateshandler-setsystemid"
language: "java"
lang: "en"
category: "function"
name: "TemplatesHandler.setSystemId"
signature: "public void setSystemId(String systemID)"
title: "TemplatesHandler.setSystemId"
directive: "method"
module: "java.xml/javax.xml.transform.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/sax/TemplatesHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TemplatesHandler.setSystemId

```java
public void setSystemId(String systemID)
```

Set the base ID (URI or system ID) for the Templates object
 created by this builder.  This must be set in order to
 resolve relative URIs in the stylesheet.  This must be
 called before the startDocument event.

**参数**

- **systemID** — Base URI for this stylesheet.
