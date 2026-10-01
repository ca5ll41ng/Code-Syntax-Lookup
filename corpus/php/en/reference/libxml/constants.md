---
id: "en-php-guide-libxml-constants"
language: "php"
lang: "en"
category: "guide"
name: "libxml.constants"
title: "Predefined Constants"
module: "libxml"
source_url: "https://www.php.net/manual/en/libxml.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Predefined Constants

The constants below are defined by this extension, and will only be available when the extension has either been compiled into PHP or dynamically loaded at runtime.

- **`LIBXML_BIGLINES` (`int`)** — Allows line numbers greater than 65535 to be reported correctly.
  > Only available as of PHP 7.0.0 with Libxml >= 2.9.0


- **`LIBXML_COMPACT` (`int`)** — Activate small nodes allocation optimization. This may speed up your application without needing to change the code.
  > Only available in Libxml >= 2.6.21


- **`LIBXML_DTDATTR` (`int`)** — Default DTD attributes
  > Enabling loading of DTD attributes will enable fetching of external entities. The `LIBXML_NO_XXE` constant can be used to prevent this (only available in Libxml >= 2.13.0, as of PHP 8.4.0).


- **`LIBXML_DTDLOAD` (`int`)** — Load the external subset
  > Enabling loading of external subsets will enable fetching of external entities. The `LIBXML_NO_XXE` constant can be used to prevent this (only available in Libxml >= 2.13.0, as of PHP 8.4.0).


- **`LIBXML_DTDVALID` (`int`)** — Validate with the DTD
  > Enabling validating the DTD may facilitate XML External Entity (XXE) attacks. The `LIBXML_NO_XXE` constant can be used to prevent this (only available in Libxml >= 2.13.0, as of PHP 8.4.0).


- **`LIBXML_HTML_NOIMPLIED` (`int`)** — Sets HTML_PARSE_NOIMPLIED flag, which turns off the automatic adding of implied html/body... elements.
  > Only available in Libxml >= 2.7.7 (as of PHP >= 5.4.0)


- **`LIBXML_HTML_NODEFDTD` (`int`)** — Sets HTML_PARSE_NODEFDTD flag, which prevents a default doctype being added when one is not found.
  > Only available in Libxml >= 2.7.8 (as of PHP >= 5.4.0)


- **`LIBXML_LOADED_VERSION` (`string`)** — Version of libxml's core parser module.
- **`LIBXML_NOBLANKS` (`int`)** — Remove blank nodes
- **`LIBXML_NOCDATA` (`int`)** — Merge CDATA as text nodes
- **`LIBXML_NOEMPTYTAG` (`int`)** — Expand empty tags (e.g. `<br/>` to `<br></br>`)
  > This option is currently just available in the `domdocument.save` and `domdocument.savexml` functions.


- **`LIBXML_NOENT` (`int`)** — Substitute entities
  > Enabling entity substitution may facilitate XML External Entity (XXE) attacks.


- **`LIBXML_NOERROR` (`int`)** — Suppress error reports
- **`LIBXML_NONET` (`int`)** — Disable network access when loading documents
- **`LIBXML_NOWARNING` (`int`)** — Suppress warning reports
- **`LIBXML_NOXMLDECL` (`int`)** — Drop the XML declaration when saving a document
  > Only available in Libxml >= 2.6.21


- **`LIBXML_NO_XXE` (`int`)** — Disables XML External Entities (XXE) when performing entity substitution
  > Only available in Libxml >= 2.13.0, as of PHP 8.4.0


- **`LIBXML_NSCLEAN` (`int`)** — Remove redundant namespace declarations
- **`LIBXML_PARSEHUGE` (`int`)** — Sets XML_PARSE_HUGE flag, which increases some hardcoded limits from the parser. This affects limits like maximum depth of a document or the entity recursion, as well as limits of the size of text nodes.
  > Because this increases the hardcoded limits, it should only be used with trusted data. Raising the depth limit on untrusted input can lead to excessive resource consumption, such as a stack overflow while processing a deeply nested document.


  > Only available in Libxml >= 2.7.0 (as of PHP >= 5.3.2 and PHP >= 5.2.12)


- **`LIBXML_PEDANTIC` (`int`)** — Sets XML_PARSE_PEDANTIC flag, which enables pedantic error reporting.
  > Available as of PHP >= 5.4.0


- **`LIBXML_RECOVER` (`int`)** — Enables recovery mode when parsing a document.
  > Only available as of PHP 8.4.0


- **`LIBXML_XINCLUDE` (`int`)** — Perform XInclude substitution (only for pull parsers, i.e. `XMLReader`).
- **`LIBXML_ERR_ERROR` (`int`)** — A recoverable error
- **`LIBXML_ERR_FATAL` (`int`)** — A fatal error
- **`LIBXML_ERR_NONE` (`int`)** — No errors
- **`LIBXML_ERR_WARNING` (`int`)** — A simple warning
- **`LIBXML_VERSION` (`int`)** — libxml version like 20605 or 20617
- **`LIBXML_DOTTED_VERSION` (`string`)** — libxml version like 2.6.5 or 2.6.17
- **`LIBXML_SCHEMA_CREATE` (`int`)** — Create default/fixed value nodes during XSD schema validation
  > Only available in Libxml >= 2.6.14 (as of PHP >= 5.5.2)
