---
id: "java-en-function-validatorhandler-getcontenthandler"
language: "java"
lang: "en"
category: "function"
name: "ValidatorHandler.getContentHandler"
signature: "public abstract ContentHandler getContentHandler()"
title: "ValidatorHandler.getContentHandler"
directive: "method"
module: "java.xml/javax.xml.validation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/validation/ValidatorHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ValidatorHandler.getContentHandler

```java
public abstract ContentHandler getContentHandler()
```

Gets the `ContentHandler` which receives the
 augmented validation result.

**返回**

- This method returns the object that was last set through the `getContentHandler` method, or null if that method has never been called since this `ValidatorHandler` has created.

**参见**

- #setContentHandler(ContentHandler)
