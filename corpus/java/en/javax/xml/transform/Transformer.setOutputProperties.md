---
id: "java-en-function-transformer-setoutputproperties"
language: "java"
lang: "en"
category: "function"
name: "Transformer.setOutputProperties"
signature: "public abstract void setOutputProperties(Properties oformat)"
title: "Transformer.setOutputProperties"
directive: "method"
module: "java.xml/javax.xml.transform"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/Transformer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Transformer.setOutputProperties

```java
public abstract void setOutputProperties(Properties oformat)
```

Set the output properties for the transformation.  These
 properties will override properties set in the Templates
 with xsl:output.

 

If argument to this function is null, any properties
 previously set are removed, and the value will revert to the value
 defined in the templates object.

 

Pass a qualified property key name as a two-part string, the namespace
 URI enclosed in curly braces ({}), followed by the local name. If the
 name has a null URL, the String only contain the local name. An
 application can safely check for a non-null URI by testing to see if the
 first character of the name is a '{' character.
 

For example, if a URI and local name were obtained from an element
 defined with &lt;xyz:foo
 xmlns:xyz="http://xyz.foo.com/yada/baz.html"/&gt;,
 then the qualified name would be "{http://xyz.foo.com/yada/baz.html}foo".
 Note that no prefix is used.
 An IllegalArgumentException is thrown  if any of the
 argument keys are not recognized and are not namespace qualified.

**参数**

- **oformat** — A set of output properties that will be used to override any of the same properties in affect for the transformation.

**异常**

- **IllegalArgumentException** — When keys are not recognized and are not namespace qualified.

**参见**

- javax.xml.transform.OutputKeys
- java.util.Properties
