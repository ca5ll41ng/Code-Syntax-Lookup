---
id: "java-en-function-xmlreader-getfeature"
language: "java"
lang: "en"
category: "function"
name: "XMLReader.getFeature"
signature: "public boolean getFeature (String name) throws SAXNotRecognizedException, SAXNotSupportedException"
title: "XMLReader.getFeature"
directive: "method"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/XMLReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLReader.getFeature

```java
public boolean getFeature (String name) throws SAXNotRecognizedException, SAXNotSupportedException
```

Look up the value of a feature flag.

 

The feature name is any fully-qualified URI.  It is
 possible for an XMLReader to recognize a feature name but
 temporarily be unable to return its value.
 Some feature values may be available only in specific
 contexts, such as before, during, or after a parse.
 Also, some feature values may not be programmatically accessible.
 (In the case of an adapter for SAX1 `Parser`, there is no
 implementation-independent way to expose whether the underlying
 parser is performing validation, expanding external entities,
 and so forth.) 

 

All XMLReaders are required to recognize the
 http://xml.org/sax/features/namespaces and the
 http://xml.org/sax/features/namespace-prefixes feature names.

 

Typical usage is something like this:

 
```

 XMLReader r = new MySAXDriver();

                         // try to activate validation
 try {
   r.setFeature("http://xml.org/sax/features/validation", true);
 } catch (SAXException e) {
   System.err.println("Cannot activate validation.");
 }

                         // register event handlers
 r.setContentHandler(new MyContentHandler());
 r.setErrorHandler(new MyErrorHandler());

                         // parse the first document
 try {
   r.parse("http://www.foo.com/mydoc.xml");
 } catch (IOException e) {
   System.err.println("I/O exception reading XML document");
 } catch (SAXException e) {
   System.err.println("XML exception reading document.");
 }
 
```

 

Implementors are free (and encouraged) to invent their own features,
 using names built on their own URIs.

**参数**

- **name** — The feature name, which is a fully-qualified URI.

**返回**

- The current value of the feature (true or false).

**异常**

- **org.xml.sax.SAXNotRecognizedException** — If the feature value can't be assigned or retrieved.
- **org.xml.sax.SAXNotSupportedException** — When the XMLReader recognizes the feature name but cannot determine its value at this time.

**参见**

- #setFeature
