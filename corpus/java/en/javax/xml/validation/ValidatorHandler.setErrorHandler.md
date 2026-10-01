---
id: "java-en-function-validatorhandler-seterrorhandler"
language: "java"
lang: "en"
category: "function"
name: "ValidatorHandler.setErrorHandler"
signature: "public abstract void setErrorHandler(ErrorHandler errorHandler)"
title: "ValidatorHandler.setErrorHandler"
directive: "method"
module: "java.xml/javax.xml.validation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/validation/ValidatorHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ValidatorHandler.setErrorHandler

```java
public abstract void setErrorHandler(ErrorHandler errorHandler)
```

Sets the `ErrorHandler` to receive errors encountered
 during the validation.

 

 Error handler can be used to customize the error handling process
 during a validation. When an `ErrorHandler` is set,
 errors found during the validation will be first sent
 to the `ErrorHandler`.

 

 The error handler can abort further validation immediately
 by throwing `org.xml.sax.SAXException` from the handler. Or for example
 it can print an error to the screen and try to continue the
 validation by returning normally from the `ErrorHandler`

 

 If any `Throwable` is thrown from an `ErrorHandler`,
 the same `Throwable` object will be thrown toward the
 root of the call stack.

 

 `ValidatorHandler` is not allowed to
 throw `org.xml.sax.SAXException` without first reporting it to
 `ErrorHandler`.

 

 When the `ErrorHandler` is null, the implementation will
 behave as if the following `ErrorHandler` is set:
 
```

 class DraconianErrorHandler implements `ErrorHandler` {
     public void fatalError( `org.xml.sax.SAXParseException` e ) throws `org.xml.sax.SAXException` {
         throw e;
     }
     public void error( `org.xml.sax.SAXParseException` e ) throws `org.xml.sax.SAXException` {
         throw e;
     }
     public void warning( `org.xml.sax.SAXParseException` e ) throws `org.xml.sax.SAXException` {
         // noop
     }
 }
 
```

 

 When a new `ValidatorHandler` object is created, initially
 this field is set to null.

**参数**

- **errorHandler** — A new error handler to be set. This parameter can be null.
