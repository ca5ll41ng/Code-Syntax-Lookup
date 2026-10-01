---
id: "java-en-function-javax-xml-validation-validator"
language: "java"
lang: "en"
category: "function"
name: "javax.xml.validation.Validator"
title: "Validator"
directive: "type"
module: "java.xml/javax.xml.validation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/validation/Validator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Validator

A processor that checks an XML document against `Schema`.

 

 A validator object is not thread-safe and not reentrant.
 In other words, it is the application's responsibility to make
 sure that one `Validator` object is not used from
 more than one thread at any given time, and while the `validate`
 method is invoked, applications may not recursively call
 the `validate` method.

> *Since 1.5*
