---
id: "java-en-function-schemafactory-geterrorhandler"
language: "java"
lang: "en"
category: "function"
name: "SchemaFactory.getErrorHandler"
signature: "public abstract ErrorHandler getErrorHandler()"
title: "SchemaFactory.getErrorHandler"
directive: "method"
module: "java.xml/javax.xml.validation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/validation/SchemaFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SchemaFactory.getErrorHandler

```java
public abstract ErrorHandler getErrorHandler()
```

Gets the current `ErrorHandler` set to this `SchemaFactory`.

**返回**

- This method returns the object that was last set through the `setErrorHandler` method, or null if that method has never been called since this `SchemaFactory` has created.

**参见**

- #setErrorHandler(ErrorHandler)
