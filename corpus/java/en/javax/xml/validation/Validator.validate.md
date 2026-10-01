---
id: "java-en-function-validator-validate"
language: "java"
lang: "en"
category: "function"
name: "Validator.validate"
signature: "public void validate(Source source) throws SAXException, IOException"
title: "Validator.validate"
directive: "method"
module: "java.xml/javax.xml.validation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/validation/Validator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Validator.validate

```java
public void validate(Source source) throws SAXException, IOException
```

Validates the specified input.

 

This is just a convenience method for
 `validate`
 with `result` of `null`.

**参数**

- **source** — XML to be validated. Must be an XML document or XML element and must not be null. For backwards compatibility, the results of attempting to validate anything other than a document or element are implementation-dependent. Implementations must either recognize and process the input or throw an IllegalArgumentException.

**异常**

- **IllegalArgumentException** — If the `Source` is an XML artifact that the implementation cannot validate (for example, a processing instruction).
- **SAXException** — If the `ErrorHandler` throws a `SAXException` or if a fatal error is found and the `ErrorHandler` returns normally.
- **IOException** — If the validator is processing a `javax.xml.transform.sax.SAXSource` and the underlying `org.xml.sax.XMLReader` throws an `IOException`.
- **NullPointerException** — If `source` is `null`.

**参见**

- #validate(Source source, Result result)
