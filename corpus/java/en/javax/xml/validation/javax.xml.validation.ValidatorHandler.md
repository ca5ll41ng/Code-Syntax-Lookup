---
id: "java-en-function-javax-xml-validation-validatorhandler"
language: "java"
lang: "en"
category: "function"
name: "javax.xml.validation.ValidatorHandler"
title: "ValidatorHandler"
directive: "type"
module: "java.xml/javax.xml.validation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/validation/ValidatorHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ValidatorHandler

Streaming validator that works on SAX stream.

 

 A `ValidatorHandler` object is not thread-safe and not reentrant.
 In other words, it is the application's responsibility to make
 sure that one `ValidatorHandler` object is not used from
 more than one thread at any given time.

 

 `ValidatorHandler` checks if the SAX events follow
 the set of constraints described in the associated `Schema`,
 and additionally it may modify the SAX events (for example
 by adding default values, etc.)

 

 `ValidatorHandler` extends from `ContentHandler`,
 but it refines the underlying `ContentHandler` in
 the following way:
 
  
- startElement/endElement events must receive non-null String
      for uri, localName, and qname,
      even though SAX allows some of them to be null.
      Similarly, the user-specified `ContentHandler` will receive non-null
      Strings for all three parameters.

  
- Applications must ensure that `ValidatorHandler`'s
      `startPrefixMapping` and
      `endPrefixMapping` are invoked
      properly. Similarly, the user-specified `ContentHandler`
      will receive startPrefixMapping/endPrefixMapping events.
      If the `ValidatorHandler` introduces additional namespace
      bindings, the user-specified `ContentHandler` will receive
      additional startPrefixMapping/endPrefixMapping events.

  
- `org.xml.sax.Attributes` for the
      `startElement` method
      may or may not include xmlns* attributes.
 

 

 A `ValidatorHandler` is automatically reset every time
 the startDocument method is invoked.

 Recognized Properties and Features
 

 This spec defines the following feature that must be recognized
 by all `ValidatorHandler` implementations.

 http://xml.org/sax/features/namespace-prefixes
 

 This feature controls how a `ValidatorHandler` introduces
 namespace bindings that were not present in the original SAX event
 stream.
 When this feature is set to true, it must make
 sure that the user's `ContentHandler` will see
 the corresponding xmlns* attribute in
 the `org.xml.sax.Attributes` object of the
 `startElement`
 callback. Otherwise, xmlns* attributes must not be
 added to `org.xml.sax.Attributes` that's passed to the
 user-specified `ContentHandler`.
 

 (Note that regardless of this switch, namespace bindings are
 always notified to applications through
 `startPrefixMapping` and
 `endPrefixMapping` methods of the
 `ContentHandler` specified by the user.)

 

 Note that this feature does NOT affect the way
 a `ValidatorHandler` receives SAX events. It merely
 changes the way it augments SAX events.

 

This feature is set to false by default.

> *Since 1.5*
