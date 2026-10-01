---
id: "java-en-function-javax-xml-stream-xmlstreamwriter"
language: "java"
lang: "en"
category: "function"
name: "javax.xml.stream.XMLStreamWriter"
title: "XMLStreamWriter"
directive: "type"
module: "java.xml/javax.xml.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/XMLStreamWriter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLStreamWriter

The XMLStreamWriter interface specifies how to write XML.  The XMLStreamWriter  does
 not perform well formedness checking on its input.  However
 the writeCharacters method is required to escape &, < and >
 For attribute values the writeAttribute method will escape the
 above characters plus " to ensure that all character content
 and attribute values are well formed.

 Each NAMESPACE
 and ATTRIBUTE must be individually written.

 
     XML Namespaces, `javax.xml.stream.isRepairingNamespaces` and write method behaviour
     
         
             Method <!-- method -->
             `isRepairingNamespaces` == true
             `isRepairingNamespaces` == false
         
         
             <!-- method -->
             namespaceURI bound
             namespaceURI unbound
             namespaceURI bound
             namespaceURI unbound
         
     

     
         
             `writeAttribute(namespaceURI, localName, value)`
             <!-- isRepairingNamespaces == true -->
             
                 <!-- namespaceURI bound -->
                 prefix:localName="value"&nbsp;[1]
             
             
                 <!-- namespaceURI unbound -->
                 xmlns:{generated}="namespaceURI" {generated}:localName="value"
             
             <!-- isRepairingNamespaces == false -->
             
                 <!-- namespaceURI bound -->
                 prefix:localName="value"&nbsp;[1]
             
             
                 <!-- namespaceURI unbound -->
                 `XMLStreamException`
             
         

         
             `writeAttribute(prefix, namespaceURI, localName, value)`
             <!-- isRepairingNamespaces == true -->
             
                 <!-- namespaceURI bound -->
                 bound to same prefix:

                 prefix:localName="value"&nbsp;[1]

                 

                 bound to different prefix:

                 xmlns:{generated}="namespaceURI" {generated}:localName="value"
             
             
                 <!-- namespaceURI unbound -->
                 xmlns:prefix="namespaceURI" prefix:localName="value"&nbsp;[3]
             
             <!-- isRepairingNamespaces == false -->
             
                 <!-- namespaceURI bound -->
                 bound to same prefix:

                 prefix:localName="value"&nbsp;[1][2]

                 

                 bound to different prefix:

                 `XMLStreamException`[2]
             
             
                 <!-- namespaceURI unbound -->
                 xmlns:prefix="namespaceURI" prefix:localName="value"&nbsp;[2][5]
             
         

         
             `writeStartElement(namespaceURI, localName)`

                 

                 `writeEmptyElement(namespaceURI, localName)`
             <!-- isRepairingNamespaces == true -->
             
                 <!-- namespaceURI bound -->
                 ``&nbsp;[1]
             
             
                 <!-- namespaceURI unbound -->
                 `<{generated`:localName xmlns:{generated}="namespaceURI">}
             
             <!-- isRepairingNamespaces == false -->
             
                 <!-- namespaceURI bound -->
                 `prefix:localName>`&nbsp;[1]
             
             
                 <!-- namespaceURI unbound -->
                 `XMLStreamException`
             
         

         
             `writeStartElement(prefix, localName, namespaceURI)`

                 

                 `writeEmptyElement(prefix, localName, namespaceURI)`
             <!-- isRepairingNamespaces == true -->
             
                 <!-- namespaceURI bound -->
                 bound to same prefix:

                 ``&nbsp;[1]

                 

                 bound to different prefix:

                 `<{generated`:localName xmlns:{generated}="namespaceURI">}
             
             
                 <!-- namespaceURI unbound -->
                 ``&nbsp;[4]
             
             <!-- isRepairingNamespaces == false -->
             
                 <!-- namespaceURI bound -->
                 bound to same prefix:

                 ``&nbsp;[1]

                 

                 bound to different prefix:

                 `XMLStreamException`
             
             
                 <!-- namespaceURI unbound -->
                 ``&nbsp;
             
         
     
 
 Notes:
 
    
- [1] if namespaceURI == default Namespace URI, then no prefix is written
    
- [2] if prefix == "" || null && namespaceURI == "", then
            no prefix or Namespace declaration is generated or written
    
- [3] if prefix == "" || null, then a prefix is randomly generated
    
- [4] if prefix == "" || null, then it is treated as the default Namespace and
            no prefix is generated or written, an xmlns declaration is generated
            and written if the namespaceURI is unbound
    
- [5] if prefix == "" || null, then it is treated as an invalid attempt to
            define the default Namespace and an XMLStreamException is thrown

**参见**

- XMLOutputFactory
- XMLStreamReader

> *Since 1.6*
