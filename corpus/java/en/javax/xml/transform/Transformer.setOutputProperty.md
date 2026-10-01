---
id: "java-en-function-transformer-setoutputproperty"
language: "java"
lang: "en"
category: "function"
name: "Transformer.setOutputProperty"
signature: "public abstract void setOutputProperty(String name, String value) throws IllegalArgumentException"
title: "Transformer.setOutputProperty"
directive: "method"
module: "java.xml/javax.xml.transform"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/Transformer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Transformer.setOutputProperty

```java
public abstract void setOutputProperty(String name, String value) throws IllegalArgumentException
```

Set an output property that will be in effect for the
 transformation.

 

Pass a qualified property name as a two-part string, the namespace URI
 enclosed in curly braces ({}), followed by the local name. If the
 name has a null URL, the String only contain the local name. An
 application can safely check for a non-null URI by testing to see if the
 first character of the name is a '{' character.
 

For example, if a URI and local name were obtained from an element
 defined with &lt;xyz:foo
 xmlns:xyz="http://xyz.foo.com/yada/baz.html"/&gt;,
 then the qualified name would be "{http://xyz.foo.com/yada/baz.html}foo".
 Note that no prefix is used.

 

The Properties object that was passed to `setOutputProperties`
 won't be effected by calling this method.

**参数**

- **name** — A non-null String that specifies an output property name, which may be namespace qualified.
- **value** — The non-null string value of the output property.

**异常**

- **IllegalArgumentException** — If the property is not supported, and is not qualified with a namespace.

**参见**

- javax.xml.transform.OutputKeys
