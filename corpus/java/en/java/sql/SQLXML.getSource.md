---
id: "java-en-function-sqlxml-getsource"
language: "java"
lang: "en"
category: "function"
name: "SQLXML.getSource"
signature: "<T extends Source> T getSource(Class<T> sourceClass) throws SQLException"
title: "SQLXML.getSource"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/SQLXML.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SQLXML.getSource

```java
<T extends Source> T getSource(Class<T> sourceClass) throws SQLException
```

Returns a Source for reading the XML value designated by this SQLXML instance.
 Sources are used as inputs to XML parsers and XSLT transformers.
 

 Sources for XML parsers will have namespace processing on by default.
 The systemID of the Source is implementation dependent.
 

 The SQL XML object becomes not readable when this method is called and
 may also become not writable depending on implementation.
 

 Note that SAX is a callback architecture, so a returned
 SAXSource should then be set with a content handler that will
 receive the SAX events from parsing.  The content handler
 will receive callbacks based on the contents of the XML.
 
```

   SAXSource saxSource = sqlxml.getSource(SAXSource.class);
   XMLReader xmlReader = saxSource.getXMLReader();
   xmlReader.setContentHandler(myHandler);
   xmlReader.parse(saxSource.getInputSource());
 
```

**参数**

- **the** — type of the class modeled by this Class object
- **sourceClass** — The class of the source, or null. If the class is null, a vendor specific Source implementation will be returned. The following classes are supported at a minimum:  ```  javax.xml.transform.dom.DOMSource - returns a DOMSource javax.xml.transform.sax.SAXSource - returns a SAXSource javax.xml.transform.stax.StAXSource - returns a StAXSource javax.xml.transform.stream.StreamSource - returns a StreamSource  ```

**返回**

- a Source for reading the XML value.

**异常**

- **SQLException** — if there is an error processing the XML value or if this feature is not supported. The getCause() method of the exception may provide a more detailed exception, for example, if an XML parser exception occurs. An exception is thrown if the state is not readable.
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.6*
