---
id: "java-en-function-sqlxml-setresult"
language: "java"
lang: "en"
category: "function"
name: "SQLXML.setResult"
signature: "<T extends Result> T setResult(Class<T> resultClass) throws SQLException"
title: "SQLXML.setResult"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/SQLXML.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SQLXML.setResult

```java
<T extends Result> T setResult(Class<T> resultClass) throws SQLException
```

Returns a Result for setting the XML value designated by this SQLXML instance.
 

 The systemID of the Result is implementation dependent.
 

 The SQL XML object becomes not writable when this method is called and
 may also become not readable depending on implementation.
 

 Note that SAX is a callback architecture and the returned
 SAXResult has a content handler assigned that will receive the
 SAX events based on the contents of the XML.  Call the content
 handler with the contents of the XML document to assign the values.
 
```

   SAXResult saxResult = sqlxml.setResult(SAXResult.class);
   ContentHandler contentHandler = saxResult.getXMLReader().getContentHandler();
   contentHandler.startDocument();
   // set the XML elements and attributes into the result
   contentHandler.endDocument();
 
```

**参数**

- **the** — type of the class modeled by this Class object
- **resultClass** — The class of the result, or null. If resultClass is null, a vendor specific Result implementation will be returned. The following classes are supported at a minimum:  ```  javax.xml.transform.dom.DOMResult - returns a DOMResult javax.xml.transform.sax.SAXResult - returns a SAXResult javax.xml.transform.stax.StAXResult - returns a StAXResult javax.xml.transform.stream.StreamResult - returns a StreamResult  ```

**返回**

- Returns a Result for setting the XML value.

**异常**

- **SQLException** — if there is an error processing the XML value or if this feature is not supported. The getCause() method of the exception may provide a more detailed exception, for example, if an XML parser exception occurs. An exception is thrown if the state is not writable.
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.6*
