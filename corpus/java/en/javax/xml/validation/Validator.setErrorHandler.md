---
id: "java-en-function-validator-seterrorhandler"
language: "java"
lang: "en"
category: "function"
name: "Validator.setErrorHandler"
signature: "public abstract void setErrorHandler(ErrorHandler errorHandler)"
title: "Validator.setErrorHandler"
directive: "method"
module: "java.xml/javax.xml.validation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/validation/Validator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Validator.setErrorHandler

```java
public abstract void setErrorHandler(ErrorHandler errorHandler)
```

Sets the `ErrorHandler` to receive errors encountered
 during the `validate` method invocation.

 

 Error handler can be used to customize the error handling process
 during a validation. When an `ErrorHandler` is set,
 errors found during the validation will be first sent
 to the `ErrorHandler`.

 

 The error handler can abort further validation immediately
 by throwing `SAXException` from the handler. Or for example
 it can print an error to the screen and try to continue the
 validation by returning normally from the `ErrorHandler`

 

 If any `Throwable` is thrown from an `ErrorHandler`,
 the caller of the `validate` method will be thrown
 the same `Throwable` object.

 

 `Validator` is not allowed to
 throw `SAXException` without first reporting it to
 `ErrorHandler`.

 

 When the `ErrorHandler` is null, the implementation will
 behave as if the following `ErrorHandler` is set:
 
```

 class DraconianErrorHandler implements `ErrorHandler` {
     public void fatalError( `org.xml.sax.SAXParseException` e ) throws `SAXException` {
         throw e;
     }
     public void error( `org.xml.sax.SAXParseException` e ) throws `SAXException` {
         throw e;
     }
     public void warning( `org.xml.sax.SAXParseException` e ) throws `SAXException` {
         // noop
     }
 }
 
```

 

 When a new `Validator` object is created, initially
 this field is set to null.

**参数**

- **errorHandler** — A new error handler to be set. This parameter can be null.
