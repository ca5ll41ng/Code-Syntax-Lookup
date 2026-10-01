---
id: "java-en-function-validatorhandler-setcontenthandler"
language: "java"
lang: "en"
category: "function"
name: "ValidatorHandler.setContentHandler"
signature: "public abstract void setContentHandler(ContentHandler receiver)"
title: "ValidatorHandler.setContentHandler"
directive: "method"
module: "java.xml/javax.xml.validation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/validation/ValidatorHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ValidatorHandler.setContentHandler

```java
public abstract void setContentHandler(ContentHandler receiver)
```

Sets the `ContentHandler` which receives
 the augmented validation result.

 

 When a `ContentHandler` is specified, a
 `ValidatorHandler` will work as a filter
 and basically copy the incoming events to the
 specified `ContentHandler`.

 

 In doing so, a `ValidatorHandler` may modify
 the events, for example by adding defaulted attributes.

 

 A `ValidatorHandler` may buffer events to certain
 extent, but to allow `ValidatorHandler` to be used
 by a parser, the following requirement has to be met.

 
  
- When
      `startElement`,
      `endElement`,
      `startDocument`, or
      `endDocument`
      are invoked on a `ValidatorHandler`,
      the same method on the user-specified `ContentHandler`
      must be invoked for the same event before the callback
      returns.
  
- `ValidatorHandler` may not introduce new elements that
      were not present in the input.

  
- `ValidatorHandler` may not remove attributes that were
      present in the input.
 

 

 When a callback method on the specified `ContentHandler`
 throws an exception, the same exception object must be thrown
 from the `ValidatorHandler`. The `ErrorHandler`
 should not be notified of such an exception.

 

 This method can be called even during a middle of a validation.

**参数**

- **receiver** — A `ContentHandler` or a null value.
