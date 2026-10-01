---
id: "java-en-function-validator-geterrorhandler"
language: "java"
lang: "en"
category: "function"
name: "Validator.getErrorHandler"
signature: "public abstract ErrorHandler getErrorHandler()"
title: "Validator.getErrorHandler"
directive: "method"
module: "java.xml/javax.xml.validation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/validation/Validator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Validator.getErrorHandler

```java
public abstract ErrorHandler getErrorHandler()
```

Gets the current `ErrorHandler` set to this `Validator`.

**返回**

- This method returns the object that was last set through the `setErrorHandler` method, or null if that method has never been called since this `Validator` has created.

**参见**

- #setErrorHandler(ErrorHandler)
