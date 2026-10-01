---
id: "java-en-function-duration-getxmlschematype"
language: "java"
lang: "en"
category: "function"
name: "Duration.getXMLSchemaType"
signature: "public QName getXMLSchemaType()"
title: "Duration.getXMLSchemaType"
directive: "method"
module: "java.xml/javax.xml.datatype"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/datatype/Duration.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Duration.getXMLSchemaType

```java
public QName getXMLSchemaType()
```

Return the name of the XML Schema date/time type that this instance
 maps to. Type is computed based on fields that are set,
 i.e. `isSet` == `true`.

 
   Required fields for XML Schema 1.0 Date/Time Datatypes.

         (timezone is optional for all date/time datatypes)
   
     
       Datatype
       year
       month
       day
       hour
       minute
       second
     
   
   
     
       `DURATION`
       X
       X
       X
       X
       X
       X
     
     
       `DURATION_DAYTIME`
       
       
       X
       X
       X
       X
     
     
       `DURATION_YEARMONTH`
       X
       X

**返回**

- one of the following constants: `DURATION`, `DURATION_DAYTIME` or `DURATION_YEARMONTH`.

**异常**

- **IllegalStateException** — If the combination of set fields does not match one of the XML Schema date/time datatypes.
