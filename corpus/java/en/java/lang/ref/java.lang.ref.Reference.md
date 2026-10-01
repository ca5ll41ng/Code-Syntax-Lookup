---
id: "java-en-function-java-lang-ref-reference"
language: "java"
lang: "en"
category: "function"
name: "java.lang.ref.Reference"
title: "Reference"
directive: "type"
module: "java.base/java.lang.ref"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ref/Reference.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Reference

Abstract base class for reference objects.  This class defines the
 operations common to all reference objects.  Because reference objects are
 implemented in close cooperation with the garbage collector, this class may
 not be subclassed directly.

 
      
          The referent must have `hasIdentity(Object) object identity`.
          When preview features are enabled, attempts to create a reference
          to a `isValue value object` result in an `IdentityException`.

**参数**

- **the** — type of the referent

> *Since 1.2*
