---
id: "java-en-function-templateshandler-gettemplates"
language: "java"
lang: "en"
category: "function"
name: "TemplatesHandler.getTemplates"
signature: "public Templates getTemplates()"
title: "TemplatesHandler.getTemplates"
directive: "method"
module: "java.xml/javax.xml.transform.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/sax/TemplatesHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TemplatesHandler.getTemplates

```java
public Templates getTemplates()
```

When a TemplatesHandler object is used as a ContentHandler
 for the parsing of transformation instructions, it creates a Templates object,
 which the caller can get once the SAX events have been completed.

**返回**

- The Templates object that was created during the SAX event process, or null if no Templates object has been created.
