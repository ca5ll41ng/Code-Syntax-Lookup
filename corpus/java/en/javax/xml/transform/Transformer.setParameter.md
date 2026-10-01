---
id: "java-en-function-transformer-setparameter"
language: "java"
lang: "en"
category: "function"
name: "Transformer.setParameter"
signature: "public abstract void setParameter(String name, Object value)"
title: "Transformer.setParameter"
directive: "method"
module: "java.xml/javax.xml.transform"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/Transformer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Transformer.setParameter

```java
public abstract void setParameter(String name, Object value)
```

Add a parameter for the transformation.

 

Pass a qualified name as a two-part string, the namespace URI
 enclosed in curly braces ({}), followed by the local name. If the
 name has a null URL, the String only contain the local name. An
 application can safely check for a non-null URI by testing to see if the
 first character of the name is a '{' character.
 

For example, if a URI and local name were obtained from an element
 defined with &lt;xyz:foo
 xmlns:xyz="http://xyz.foo.com/yada/baz.html"/&gt;,
 then the qualified name would be "{http://xyz.foo.com/yada/baz.html}foo".
 Note that no prefix is used.

**参数**

- **name** — The name of the parameter, which may begin with a namespace URI in curly braces ({}).
- **value** — The value object.  This can be any valid Java object. It is up to the processor to provide the proper object conversion or to simply pass the object on for use in an extension.

**异常**

- **NullPointerException** — If value is null.
