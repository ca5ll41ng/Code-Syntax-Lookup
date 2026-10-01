---
id: "java-en-function-java-sql-sqlxml"
language: "java"
lang: "en"
category: "function"
name: "java.sql.SQLXML"
title: "SQLXML"
directive: "type"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/SQLXML.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SQLXML

The mapping in the JavaTM programming language for the SQL XML type.
 XML is a built-in type that stores an XML value
 as a column value in a row of a database table.
 By default drivers implement an SQLXML object as
 a logical pointer to the XML data
 rather than the data itself.
 An SQLXML object is valid for the duration of the transaction in which it was created.
 

 The SQLXML interface provides methods for accessing the XML value
 as a String, a Reader or Writer, or as a Stream.  The XML value
 may also be accessed through a Source or set as a Result, which
 are used with XML Parser APIs such as DOM, SAX, and StAX, as
 well as with XSLT transforms and XPath evaluations.
 

 Methods in the interfaces ResultSet, CallableStatement, and PreparedStatement,
 such as getSQLXML allow a programmer to access an XML value.
 In addition, this interface has methods for updating an XML value.
 

 The XML value of the SQLXML instance may be obtained as a BinaryStream using
 
```

   SQLXML sqlxml = resultSet.getSQLXML(column);
   InputStream binaryStream = sqlxml.getBinaryStream();
 
```

 For example, to parse an XML value with a DOM parser:
 
```

   DocumentBuilder parser = DocumentBuilderFactory.newInstance().newDocumentBuilder();
   Document result = parser.parse(binaryStream);
 
```

 or to parse an XML value with a SAX parser to your handler:
 
```

   SAXParser parser = SAXParserFactory.newInstance().newSAXParser();
   parser.parse(binaryStream, myHandler);
 
```

 or to parse an XML value with a StAX parser:
 
```

   XMLInputFactory factory = XMLInputFactory.newInstance();
   XMLStreamReader streamReader = factory.createXMLStreamReader(binaryStream);
 
```

 

 Because databases may use an optimized representation for the XML,
 accessing the value through getSource() and
 setResult() can lead to improved processing performance
 without serializing to a stream representation and parsing the XML.
 

 For example, to obtain a DOM Document Node:
 
```

   DOMSource domSource = sqlxml.getSource(DOMSource.class);
   Document document = (Document) domSource.getNode();
 
```

 or to set the value to a DOM Document Node to myNode:
 
```

   DOMResult domResult = sqlxml.setResult(DOMResult.class);
   domResult.setNode(myNode);
 
```

 or, to send SAX events to your handler:
 
```

   SAXSource saxSource = sqlxml.getSource(SAXSource.class);
   XMLReader xmlReader = saxSource.getXMLReader();
   xmlReader.setContentHandler(myHandler);
   xmlReader.parse(saxSource.getInputSource());
 
```

 or, to set the result value from SAX events:
 
```

   SAXResult saxResult = sqlxml.setResult(SAXResult.class);
   ContentHandler contentHandler = saxResult.getHandler();
   contentHandler.startDocument();
   // set the XML elements and attributes into the result
   contentHandler.endDocument();
 
```

 or, to obtain StAX events:
 
```

   StAXSource staxSource = sqlxml.getSource(StAXSource.class);
   XMLStreamReader streamReader = staxSource.getXMLStreamReader();
 
```

 or, to set the result value from StAX events:
 
```

   StAXResult staxResult = sqlxml.setResult(StAXResult.class);
   XMLStreamWriter streamWriter = staxResult.getXMLStreamWriter();
 
```

 or, to perform XSLT transformations on the XML value using the XSLT in xsltFile
 output to file resultFile:
 
```

   File xsltFile = new File("a.xslt");
   File myFile = new File("result.xml");
   Transformer xslt = TransformerFactory.newInstance().newTransformer(new StreamSource(xsltFile));
   Source source = sqlxml.getSource(null);
   Result result = new StreamResult(myFile);
   xslt.transform(source, result);
 
```

 or, to evaluate an XPath expression on the XML value:
 
```

   XPath xpath = XPathFactory.newInstance().newXPath();
   DOMSource domSource = sqlxml.getSource(DOMSource.class);
   Document document = (Document) domSource.getNode();
   String expression = "/foo/@bar";
   String barValue = xpath.evaluate(expression, document);
 
```

 To set the XML value to be the result of an XSLT transform:
 
```

   File sourceFile = new File("source.xml");
   Transformer xslt = TransformerFactory.newInstance().newTransformer(new StreamSource(xsltFile));
   Source streamSource = new StreamSource(sourceFile);
   Result result = sqlxml.setResult(null);
   xslt.transform(streamSource, result);
 
```

 Any Source can be transformed to a Result using the identity transform
 specified by calling newTransformer():
 
```

   Transformer identity = TransformerFactory.newInstance().newTransformer();
   Source source = sqlxml.getSource(null);
   File myFile = new File("result.xml");
   Result result = new StreamResult(myFile);
   identity.transform(source, result);
 
```

 To write the contents of a Source to standard output:
 
```

   Transformer identity = TransformerFactory.newInstance().newTransformer();
   Source source = sqlxml.getSource(null);
   Result result = new StreamResult(System.out);
   identity.transform(source, result);
 
```

 To create a DOMSource from a DOMResult:
 
```

    DOMSource domSource = new DOMSource(domResult.getNode());
 
```

 

 Incomplete or invalid XML values may cause an SQLException when
 set or the exception may occur when execute() occurs.  All streams
 must be closed before execute() occurs or an SQLException will be thrown.
 

 Reading and writing XML values to or from an SQLXML object can happen at most once.
 The conceptual states of readable and not readable determine if one
 of the reading APIs will return a value or throw an exception.
 The conceptual states of writable and not writable determine if one
 of the writing APIs will set a value or throw an exception.
 

 The state moves from readable to not readable once close(), free() or any of the
 reading APIs are called: getBinaryStream(), getCharacterStream(), getSource(), and getString().
 Implementations may also change the state to not writable when this occurs.
 

 The state moves from writable to not writable once close(), free() or any of the
 writing APIs are called: setBinaryStream(), setCharacterStream(), setResult(), and setString().
 Implementations may also change the state to not readable when this occurs.
 

 To release resources used by the `SQLXML` object, applications must call
 either the `free` or the `close` method.  Any attempt to
 invoke a method other than `free` or `close` after the
 `SQLXML` object has been closed, will result in a `SQLException`
 being thrown.
 

 All methods on the `SQLXML` interface must be fully implemented if the
 JDBC driver supports the data type.

**参见**

- javax.xml.parsers
- javax.xml.stream
- javax.xml.transform
- javax.xml.xpath

> *Since 1.6*
