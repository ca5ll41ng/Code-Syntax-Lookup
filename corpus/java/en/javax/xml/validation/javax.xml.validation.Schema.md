---
id: "java-en-function-javax-xml-validation-schema"
language: "java"
lang: "en"
category: "function"
name: "javax.xml.validation.Schema"
title: "Schema"
directive: "type"
module: "java.xml/javax.xml.validation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/validation/Schema.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Schema

Immutable in-memory representation of grammar.

 

 This object represents a set of constraints that can be checked/
 enforced against an XML document.

 

 A `Schema` object is thread safe and applications are
 encouraged to share it across many parsers in many threads.

 

 A `Schema` object is immutable in the sense that it shouldn't
 change the set of constraints once it is created. In other words,
 if an application validates the same document twice against the same
 `Schema`, it must always produce the same result.

 

 A `Schema` object is usually created from `SchemaFactory`.

 

 Two kinds of validators can be created from a `Schema` object.
 One is `Validator`, which provides highly-level validation
 operations that cover typical use cases. The other is
 `ValidatorHandler`, which works on top of SAX for better
 modularity.

 

 This specification does not refine
 the `equals` method.
 In other words, if you parse the same schema twice, you may
 still get !schemaA.equals(schemaB).

**参见**

- XML Schema Part 1: Structures
- Extensible Markup Language (XML) 1.1
- Extensible Markup Language (XML) 1.0 (Second Edition)

> *Since 1.5*
