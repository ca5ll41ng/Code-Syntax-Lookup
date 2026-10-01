---
id: "java-en-function-xmlconstants-use_catalog"
language: "java"
lang: "en"
category: "function"
name: "XMLConstants.USE_CATALOG"
signature: "public static final String USE_CATALOG = \"http://javax.xml.XMLConstants/feature/useCatalog\""
title: "XMLConstants.USE_CATALOG"
directive: "field"
module: "java.xml/javax.xml"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/XMLConstants.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLConstants.USE_CATALOG

```java
public static final String USE_CATALOG = "http://javax.xml.XMLConstants/feature/useCatalog"
```

Feature: useCatalog

 

 Instructs XML processors to use XML Catalogs to resolve entity references.
 Catalogs may be set through JAXP factories, system properties, or
 configuration file by using the `javax.xml.catalog.files` property
 defined in `javax.xml.catalog.CatalogFeatures`.
 The following code enables Catalog on SAX parser:
 {@snippet :
      SAXParserFactory spf = SAXParserFactory.newInstance();
      spf.setFeature(XMLConstants.USE_CATALOG, true);
      SAXParser parser = spf.newSAXParser();
      parser.setProperty(CatalogFeatures.Feature.FILES.getPropertyName(), "catalog.xml");
 }

 

 **Value:** a boolean. If the value is true, and a catalog is set,
 the XML parser will resolve external references using
 `javax.xml.catalog.CatalogResolver`. If the value is false,
 XML Catalog is ignored even if one is set. The default value is true.

 

 **System Property:** `javax.xml.useCatalog`

 

 **Configuration File:**
 Yes. The property can be set in the
 configuration file.

> *Since 9*
