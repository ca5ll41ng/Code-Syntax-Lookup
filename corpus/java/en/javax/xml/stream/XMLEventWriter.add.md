---
id: "java-en-function-xmleventwriter-add"
language: "java"
lang: "en"
category: "function"
name: "XMLEventWriter.add"
signature: "public void add(XMLEvent event) throws XMLStreamException"
title: "XMLEventWriter.add"
directive: "method"
module: "java.xml/javax.xml.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/XMLEventWriter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLEventWriter.add

```java
public void add(XMLEvent event) throws XMLStreamException
```

Add an event to the output stream
 Adding a START_ELEMENT will open a new namespace scope that
 will be closed when the corresponding END_ELEMENT is written.
 
   Required and optional fields for events added to the writer
   
     
       Event Type
       Required Fields
       Optional Fields
       Required Behavior
     
   
   
     
        START_ELEMENT  
        QName name 
        namespaces , attributes 
        A START_ELEMENT will be written by writing the name,
       namespaces, and attributes of the event in XML 1.0 valid
       syntax for START_ELEMENTs.
       The name is written by looking up the prefix for
       the namespace uri.  The writer can be configured to
       respect prefixes of QNames.  If the writer is respecting
       prefixes it must use the prefix set on the QName.  The
       default behavior is to lookup the value for the prefix
       on the EventWriter's internal namespace context.
       Each attribute (if any)
       is written using the behavior specified in the attribute
       section of this table.  Each namespace (if any) is written
       using the behavior specified in the namespace section of this
       table.
       
     
     
        END_ELEMENT  
        Qname name  
        None 
        A well formed END_ELEMENT tag is written.
       The name is written by looking up the prefix for
       the namespace uri.  The writer can be configured to
       respect prefixes of QNames.  If the writer is respecting
       prefixes it must use the prefix set on the QName.  The
       default behavior is to lookup the value for the prefix
       on the EventWriter's internal namespace context.
       If the END_ELEMENT name does not match the START_ELEMENT
       name an XMLStreamException is thrown.
       
     
     
        ATTRIBUTE  
        QName name , String value 
        QName type 
        An attribute is written using the same algorithm
            to find the lexical form as used in START_ELEMENT.
            The default is to use double quotes to wrap attribute
            values and to escape any double quotes found in the
            value.  The type value is ignored.
       
     
     
        NAMESPACE  
        String prefix, String namespaceURI,
            boolean isDefaultNamespaceDeclaration
      
        None  
        A namespace declaration is written.  If the
            namespace is a default namespace declaration
            (isDefault is true) then xmlns="$namespaceURI"
            is written and the prefix is optional.  If
            isDefault is false, the prefix must be declared
            and the writer must prepend xmlns to the prefix
            and write out a standard prefix declaration.
      
     
     
        PROCESSING_INSTRUCTION  
          None
          String target, String data
          The data does not need to be present and may be
              null.  Target is required and many not be null.
              The writer
              will write data section
              directly after the target,
              enclosed in appropriate XML 1.0 syntax
      
     
     
        COMMENT  
        None  
        String comment  
        If the comment is present (not null) it is written, otherwise an
            an empty comment is written
      
     
     
        START_DOCUMENT  
        None  
        String encoding , boolean standalone, String version  
        A START_DOCUMENT event is not required to be written to the
             stream.  If present the attributes are written inside
             the appropriate XML declaration syntax
      
     
     
        END_DOCUMENT  
        None 
        None  
        Nothing is written to the output  
     
     
        DTD  
        String DocumentTypeDefinition  
        None  
        The DocumentTypeDefinition is written to the output

**参数**

- **event** — the event to be added

**异常**

- **XMLStreamException** — if an error occurs
