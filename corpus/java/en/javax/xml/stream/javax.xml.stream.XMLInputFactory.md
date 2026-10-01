---
id: "java-en-function-javax-xml-stream-xmlinputfactory"
language: "java"
lang: "en"
category: "function"
name: "javax.xml.stream.XMLInputFactory"
title: "XMLInputFactory"
directive: "type"
module: "java.xml/javax.xml.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/XMLInputFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLInputFactory

Defines an abstract implementation of a factory for getting streams.

 The following table defines the standard properties of this specification.
 Each property varies in the level of support required by each implementation.
 The level of support required is described in the 'Required' column.

   
    Configuration Parameters
    
      
        Property Name
        Behavior
        Return type
        Default Value
        Required
      
    
    
 javax.xml.stream.isValidatingTurns on/off implementation specific DTD validationBooleanFalseNo
 javax.xml.stream.isNamespaceAwareTurns on/off namespace processing for XML 1.0 supportBooleanTrueTrue (required) / False (optional)
 javax.xml.stream.isCoalescingRequires the processor to coalesce adjacent character dataBooleanFalseYes
 javax.xml.stream.isReplacingEntityReferencesreplace internal entity references with their replacement text and report them as charactersBooleanTrueYes
javax.xml.stream.isSupportingExternalEntitiesResolve external parsed entitiesBooleanUnspecifiedYes
javax.xml.stream.supportDTDUse this property to request processors that do not support DTDsBooleanTrueYes
javax.xml.stream.reportersets/gets the impl of the XMLReporter javax.xml.stream.XMLReporterNullYes
javax.xml.stream.resolversets/gets the impl of the XMLResolver interfacejavax.xml.stream.XMLResolverNullYes
javax.xml.stream.allocatorsets/gets the impl of the XMLEventAllocator interfacejavax.xml.stream.util.XMLEventAllocatorNullYes

**参见**

- XMLOutputFactory
- XMLEventReader
- XMLStreamReader
- EventFilter
- XMLReporter
- XMLResolver
- javax.xml.stream.util.XMLEventAllocator

> *Since 1.6*
