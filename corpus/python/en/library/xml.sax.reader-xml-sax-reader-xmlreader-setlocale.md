---
id: "python-en-function-xml-sax-reader-xmlreader-setlocale"
language: "python"
lang: "en"
category: "function"
name: "XMLReader.setLocale"
signature: "XMLReader.setLocale(locale)"
directive: "method"
module: "xml.sax.reader"
source_url: "https://docs.python.org/3/library/xml.sax.reader.html#xml.sax.reader.XMLReader.setLocale"
license: "PSF"
updated: "2026-10-01"
---

# XMLReader.setLocale

Allow an application to set the locale for errors and warnings.

SAX parsers are not required to provide localization for errors and warnings; if
they cannot support the requested locale, however, they must raise a SAX
exception.  Applications may request a locale change in the middle of a parse.
