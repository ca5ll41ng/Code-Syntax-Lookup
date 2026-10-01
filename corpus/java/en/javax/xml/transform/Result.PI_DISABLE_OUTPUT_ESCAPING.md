---
id: "java-en-function-result-pi_disable_output_escaping"
language: "java"
lang: "en"
category: "function"
name: "Result.PI_DISABLE_OUTPUT_ESCAPING"
signature: "public static final String PI_DISABLE_OUTPUT_ESCAPING = \"javax.xml.transform.disable-output-escaping\""
title: "Result.PI_DISABLE_OUTPUT_ESCAPING"
directive: "field"
module: "java.xml/javax.xml.transform"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/Result.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Result.PI_DISABLE_OUTPUT_ESCAPING

```java
public static final String PI_DISABLE_OUTPUT_ESCAPING = "javax.xml.transform.disable-output-escaping"
```

The name of the processing instruction that is sent if the
 result tree disables output escaping.

 

Normally, result tree serialization escapes& and < (and
 possibly other characters) when outputting text nodes.
 This ensures that the output is well-formed XML. However,
 it is sometimes convenient to be able to produce output that is
 almost, but not quite well-formed XML; for example,
 the output may include ill-formed sections that will
 be transformed into well-formed XML by a subsequent non-XML aware
 process. If a processing instruction is sent with this name,
 serialization should be output without any escaping.

 

Result DOM trees may also have PI_DISABLE_OUTPUT_ESCAPING and
 PI_ENABLE_OUTPUT_ESCAPING inserted into the tree.

**参见**

- disable-output-escaping in XSLT Specification
