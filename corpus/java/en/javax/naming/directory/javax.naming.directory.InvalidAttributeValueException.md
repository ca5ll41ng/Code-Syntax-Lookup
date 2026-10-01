---
id: "java-en-function-javax-naming-directory-invalidattributevalueexception"
language: "java"
lang: "en"
category: "function"
name: "javax.naming.directory.InvalidAttributeValueException"
title: "InvalidAttributeValueException"
directive: "type"
module: "java.naming/javax.naming.directory"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/directory/InvalidAttributeValueException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InvalidAttributeValueException

This class is thrown when an attempt is
 made to add to an attribute a value that conflicts with the attribute's
 schema definition.  This could happen, for example, if attempting
 to add an attribute with no value when the attribute is required
 to have at least one value, or if attempting to add more than
 one value to a single valued-attribute, or if attempting to
 add a value that conflicts with the syntax of the attribute.
 

 Synchronization and serialization issues that apply to NamingException
 apply directly here.

> *Since 1.3*
