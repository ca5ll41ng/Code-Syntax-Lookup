---
id: "java-en-function-validatorhandler-geterrorhandler"
language: "java"
lang: "en"
category: "function"
name: "ValidatorHandler.getErrorHandler"
signature: "public abstract ErrorHandler getErrorHandler()"
title: "ValidatorHandler.getErrorHandler"
directive: "method"
module: "java.xml/javax.xml.validation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/validation/ValidatorHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ValidatorHandler.getErrorHandler

```java
public abstract ErrorHandler getErrorHandler()
```

Gets the current `ErrorHandler` set to this `ValidatorHandler`.

**返回**

- This method returns the object that was last set through the `setErrorHandler` method, or null if that method has never been called since this `ValidatorHandler` has created.

**参见**

- #setErrorHandler(ErrorHandler)
