---
id: "java-en-function-javax-xml-catalog-catalogfeatures"
language: "java"
lang: "en"
category: "function"
name: "javax.xml.catalog.CatalogFeatures"
title: "CatalogFeatures"
directive: "type"
module: "java.xml/javax.xml.catalog"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/catalog/CatalogFeatures.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CatalogFeatures

The CatalogFeatures holds a collection of features and properties.

 
 Catalog Features
 
 
 Feature
 Description
 Property Name
 System Property [1]
 Value [2]
 Action
 
 
 Type
 Value
 
 

 

 
 FILES
 A semicolon-delimited list of URIs to locate the catalog files.
 The URIs must be absolute and have a URL protocol handler for the URI scheme.
 
 javax.xml.catalog.files
 javax.xml.catalog.files
 String
 URIs
 
 Reads the first catalog as the current catalog; Loads others if no match
 is found in the current catalog including delegate catalogs if any.
 
 

 
 PREFER
 Indicates the preference between the public and system
 identifiers. The default value is public [3].
 javax.xml.catalog.prefer
 N/A
 String
 `system`
 
 Searches system entries for a match; Searches public entries when
 external identifier specifies only a public identifier
 
 
 `public`
 
 Searches system entries for a match; Searches public entries when
 there is no matching system entry.
 

 
 DEFER
 Indicates that the alternative catalogs including those
 specified in delegate entries or nextCatalog are not read until they are
 needed. The default value is true.
 javax.xml.catalog.defer [4]
 javax.xml.catalog.defer
 String
 `true`
 
 Loads alternative catalogs as needed.
 
 
 
 `false`
 
 Loads all catalogs[5]. 
 

 
 RESOLVE
 Determines the action if there is no matching entry found after
 all of the specified catalogs are exhausted. The default is strict.
 javax.xml.catalog.resolve [4]
 javax.xml.catalog.resolve
 String
 `strict`
 
 Throws CatalogException if there is no match.
 
 
 
 `continue`
 
 Allows the XML parser to continue as if there is no match.
 
 
 
 `ignore`
 
 Tells the XML parser to skip the external references if there no match.
 
 

 
 
 

 **[1]** There is no System property for the features that marked as "N/A".
 

 **[2]** The value shall be exactly as listed in this table, case-sensitive.
 Any unspecified value will result in `IllegalArgumentException`.
 

 **[3]** The Catalog specification
 defined complex rules on the prefer attribute. Although it can be public or system,
 the specification made `system` the preferred option, that is, no matter
 the option, a system entry is always used if found. Public entries are only
 considered if the prefer is public and system entries are not found. It is
 therefore recommended that the prefer attribute be set as public
 (which is the default).
 

 **[4]** Although non-standard attributes in the OASIS Catalog specification,
 `defer` and `resolve` are recognized by the Java Catalog API the
 same as the `prefer` as being an attribute in the catalog entry of the
 main catalog. Note that only the attributes specified for the catalog entry
 of the main Catalog file will be used.
 

 **[5]** If the intention is to share an entire catalog store, it may be desirable to
 set the property `javax.xml.catalog.defer` to false to allow the entire
 catalog to be pre-loaded.

 Property Precedence
 The Catalog Features follow the
 Property Precedence
 as described in the module summary with regards to the priority with which
 their values are retrieved from the various configuration sources such as the
 JAXP configuration file,
 system and API properties. In addition to the general configuration sources,
 the Catalog Features are further supported in the catalog file itself where
 they can be specified as attributes of the catalog and group entries. When the
 attributes are specified, they shall take preference over any of the other
 configuration sources.
 For example, if a `prefer` attribute is set in the catalog file as in
 ``, any other input for the "prefer" property
 is not necessary or will be ignored.

 

 A CatalogFeatures instance can be created through its builder as illustrated
 in the following sample code:
 
```
`CatalogFeatures f = CatalogFeatures.builder()
                        .with(Feature.FILES, "file:///etc/xml/catalog")
                        .with(Feature.PREFER, "public")
                        .with(Feature.DEFER, "true")
                        .with(Feature.RESOLVE, "ignore")
                        .build();
 `
```

 JAXP XML Processor Support
 The Catalog Features are supported throughout the JAXP processors, including
 SAX and DOM (`javax.xml.parsers`), and StAX parsers (`javax.xml.stream`),
 Schema Validation (`javax.xml.validation`), and XML Transformation
 (`javax.xml.transform`). The features described above can be set through JAXP
 factories or processors that define a setProperty or setAttribute interface.
 For example, the following code snippet sets a URI to a catalog file on a SAX
 parser through the `javax.xml.catalog.files` property:

 
```
`SAXParserFactory spf = SAXParserFactory.newInstance();
      spf.setFeature(XMLConstants.USE_CATALOG, true); [1]
      SAXParser parser = spf.newSAXParser();
      parser.setProperty(CatalogFeatures.Feature.FILES.getPropertyName(), "file:///etc/xml/catalog");
 `
```

 

 [1] Note that this statement is not required since the default value of
 `USE_CATALOG USE_CATALOG` is true.

 

 The JAXP Processors' support for Catalog depends on both the
 `USE_CATALOG USE_CATALOG` feature and the
 existence of valid Catalog file(s). A JAXP processor will use the Catalog
 only when the feature is true and valid Catalog file(s) are specified through
 the `javax.xml.catalog.files` property. It will make no attempt to use
 the Catalog if either `USE_CATALOG USE_CATALOG`
 is set to false, or there is no Catalog file specified.

 

 The JAXP processors will observe the default settings of the
 `javax.xml.catalog.CatalogFeatures`. The processors, for example, will
 report an Exception by default when no matching entry is found since the
 default value of the `javax.xml.catalog.resolve` property is strict.

 

 The JAXP processors give preference to user-specified custom resolvers. If such
 a resolver is registered, it will be used over the CatalogResolver. If it returns
 null however, the processors will continue resolving with the CatalogResolver.
 If it returns an empty source, no attempt will be made by the CatalogResolver.

 

 The Catalog support is available for any process in the JAXP library that
 supports a resolver. The following table lists all such processes.

 Processes with Catalog Support

 
 Processes with Catalog Support
 
 
 Process
 Catalog Entry Type
 Example
 
 
 
 
 DTDs and external entities
 public, system
 
 
```
The following DTD reference:
   <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
   Can be resolved using the following Catalog entry:
   
   or
   
 
```

 
 
 
 XInclude
 uri
 
 
```
The following XInclude element:
   
   can be resolved using a URI entry:
   
   or
   
 
```

 
 
 
 XSD import
 uri
 
 
```
The following import element:
    
   can be resolved using a URI entry:
   
   or
   
   or
   
 
```

 
 
 
 XSD include
 uri
 
 
```
The following include element:
   
   can be resolved using a URI entry:
   
   or
   
 
```

 
 
 
 XSL import and include
 uri
 
 
```
The following include element:
   
   can be resolved using a URI entry:
   
   or
   
 
```

 
 
 
 XSL document function
 uri
 
 
```
The document in the following element:
   
   can be resolved using a URI entry:
   
   or
   
 
```

> *Since 9*
