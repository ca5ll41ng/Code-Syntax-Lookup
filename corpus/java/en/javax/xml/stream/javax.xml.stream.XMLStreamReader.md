---
id: "java-en-function-javax-xml-stream-xmlstreamreader"
language: "java"
lang: "en"
category: "function"
name: "javax.xml.stream.XMLStreamReader"
title: "XMLStreamReader"
directive: "type"
module: "java.xml/javax.xml.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/XMLStreamReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLStreamReader

The XMLStreamReader interface allows forward, read-only access to XML.
  It is designed to be the lowest level and most efficient way to
  read XML data.

 

 The XMLStreamReader is designed to iterate over XML using
 next() and hasNext().  The data can be accessed using methods such as getEventType(),
 getNamespaceURI(), getLocalName() and getText();

 

 An XMLStreamReader instance is created with an initial event type START_DOCUMENT.
 At any moment in time, it has a current event that the methods of the interface
 access and may load the next event through the `next` method.
 The current event type can be determined by `getEventType getEventType`, and
 the next returned by the `next` method.

 

 Parsing events are defined as the XML Declaration, a DTD,
 start tag, character data, white space, end tag, comment,
 or processing instruction.  An attribute or namespace event may be encountered
 at the root level of a document as the result of a query operation.

 

 For XML 1.0 compliance an XML processor must pass the
 identifiers of declared unparsed entities, notation declarations and their
 associated identifiers to the application.  This information is
 provided through the property API on this interface.
 The following two properties allow access to this information:
 javax.xml.stream.notations and javax.xml.stream.entities.
 When the current event is a DTD the following call will return a
 list of Notations
 `List l = (List) getProperty("javax.xml.stream.notations");`
 The following call will return a list of entity declarations:
 `List l = (List) getProperty("javax.xml.stream.entities");`
 These properties can only be accessed during a DTD event and
 are defined to return null if the information is not available.

 

 The following table describes which methods are valid in what state.
 If a method is called in an invalid state the method will throw a
 java.lang.IllegalStateException.

 
   Valid methods for each state
   
     
       Event Type
       Valid Methods
     
   
   
     
        All States  
        getProperty(), hasNext(), require(), close(),
            getNamespaceURI(), isStartElement(),
            isEndElement(), isCharacters(), isWhiteSpace(),
            getNamespaceContext(), getEventType(), getLocation(),
            hasText(), hasName()
       
     
     
        START_ELEMENT  
        next(), getName(), getLocalName(), hasName(), getPrefix(),
            getAttributeXXX(), isAttributeSpecified(),
            getNamespaceXXX(),
            getElementText(), nextTag()
       
     
     
        ATTRIBUTE  
        next(), nextTag()
            getAttributeXXX(), isAttributeSpecified(),
       
     
     
        NAMESPACE  
        next(), nextTag()
            getNamespaceXXX()
       
     
     
        END_ELEMENT  
        next(), getName(), getLocalName(), hasName(), getPrefix(),
            getNamespaceXXX(), nextTag()
      
     
     
        CHARACTERS  
        next(), getTextXXX(), nextTag() 
     
     
        CDATA  
        next(), getTextXXX(), nextTag() 
     
     
        COMMENT  
        next(), getTextXXX(), nextTag() 
     
     
        SPACE  
        next(), getTextXXX(), nextTag() 
     
     
        START_DOCUMENT  
        next(), getEncoding(), getVersion(), isStandalone(), standaloneSet(),
            getCharacterEncodingScheme(), nextTag()
     
     
        END_DOCUMENT  
        close()
     
     
        PROCESSING_INSTRUCTION  
        next(), getPITarget(), getPIData(), nextTag() 
     
     
        ENTITY_REFERENCE  
        next(), getLocalName(), getText(), nextTag() 
     
     
        DTD  
        next(), getText(), nextTag()

**参见**

- javax.xml.stream.events.XMLEvent
- XMLInputFactory
- XMLStreamWriter

> *Since 1.6*
