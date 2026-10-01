---
id: "java-en-function-documentbuilderfactory-setvalidating"
language: "java"
lang: "en"
category: "function"
name: "DocumentBuilderFactory.setValidating"
signature: "public void setValidating(boolean validating)"
title: "DocumentBuilderFactory.setValidating"
directive: "method"
module: "java.xml/javax.xml.parsers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/parsers/DocumentBuilderFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DocumentBuilderFactory.setValidating

```java
public void setValidating(boolean validating)
```

Specifies that the parser produced by this code will
 validate documents as they are parsed. By default the value of this
 is set to `false`.

 

 Note that "the validation" here means
 a validating
 parser as defined in the XML recommendation.
 In other words, it essentially just controls the DTD validation.
 (except the legacy two properties defined in JAXP 1.2.)

 

 To use modern schema languages such as W3C XML Schema or
 RELAX NG instead of DTD, you can configure your parser to be
 a non-validating parser by leaving the `setValidating`
 method `false`, then use the `setSchema`
 method to associate a schema to a parser.

**参数**

- **validating** — true if the parser produced will validate documents as they are parsed; false otherwise.
