---
id: "java-en-function-xmlgregoriancalendar-getxmlschematype"
language: "java"
lang: "en"
category: "function"
name: "XMLGregorianCalendar.getXMLSchemaType"
signature: "public abstract QName getXMLSchemaType()"
title: "XMLGregorianCalendar.getXMLSchemaType"
directive: "method"
module: "java.xml/javax.xml.datatype"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/datatype/XMLGregorianCalendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLGregorianCalendar.getXMLSchemaType

```java
public abstract QName getXMLSchemaType()
```

Return the name of the XML Schema date/time type that this instance
 maps to. Type is computed based on fields that are set.

 
   Required fields for XML Schema 1.0 Date/Time Datatypes.

         (timezone is optional for all date/time datatypes)
   
     
       Datatype
       year
       month
       day
       hour
       minute
       second
     
   
   
     
       `DATETIME`
       X
       X
       X
       X
       X
       X
     
     
       `DATE`
       X
       X
       X
       
       
       
     
     
       `TIME`
       
       
       
       X
       X
       X
     
     
       `GYEARMONTH`
       X
       X
       
       
       
       
     
     
       `GMONTHDAY`
       
       X
       X
       
       
       
     
     
       `GYEAR`
       X
       
       
       
       
       
     
     
       `GMONTH`
       
       X
       
       
       
       
     
     
       `GDAY`
       
       
       X

**返回**

- One of the following class constants: `DATETIME`, `TIME`, `DATE`, `GYEARMONTH`, `GMONTHDAY`, `GYEAR`, `GMONTH` or `GDAY`.

**异常**

- **java.lang.IllegalStateException** — if the combination of set fields does not match one of the eight defined XML Schema builtin date/time datatypes.
