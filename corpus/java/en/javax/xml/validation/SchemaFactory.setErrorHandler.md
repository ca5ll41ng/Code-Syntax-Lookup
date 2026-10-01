---
id: "java-en-function-schemafactory-seterrorhandler"
language: "java"
lang: "en"
category: "function"
name: "SchemaFactory.setErrorHandler"
signature: "public abstract void setErrorHandler(ErrorHandler errorHandler)"
title: "SchemaFactory.setErrorHandler"
directive: "method"
module: "java.xml/javax.xml.validation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/validation/SchemaFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SchemaFactory.setErrorHandler

```java
public abstract void setErrorHandler(ErrorHandler errorHandler)
```

Sets the `ErrorHandler` to receive errors encountered
 during the `newSchema` method invocation.

 

 Error handler can be used to customize the error handling process
 during schema parsing. When an `ErrorHandler` is set,
 errors found during the parsing of schemas will be first sent
 to the `ErrorHandler`.

 

 The error handler can abort the parsing of a schema immediately
 by throwing `SAXException` from the handler. Or for example
 it can print an error to the screen and try to continue the
 processing by returning normally from the `ErrorHandler`

 

 If any `Throwable` (or instances of its derived classes)
 is thrown from an `ErrorHandler`,
 the caller of the `newSchema` method will be thrown
 the same `Throwable` object.

 

 `SchemaFactory` is not allowed to
 throw `SAXException` without first reporting it to
 `ErrorHandler`.

 

 Applications can call this method even during a `Schema`
 is being parsed.

 

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

 

 When a new `SchemaFactory` object is created, initially
 this field is set to null. This field will NOT be
 inherited to `Schema`s, `Validator`s, or
 `ValidatorHandler`s that are created from this `SchemaFactory`.

**参数**

- **errorHandler** — A new error handler to be set. This parameter can be `null`.
