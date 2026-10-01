---
id: "python-en-function-xml-sax-utils-quoteattr"
language: "python"
lang: "en"
category: "function"
name: "quoteattr"
signature: "quoteattr(data, entities={})"
directive: "function"
module: "xml.sax.utils"
source_url: "https://docs.python.org/3/library/xml.sax.utils.html#xml.sax.utils.quoteattr"
license: "PSF"
updated: "2026-10-01"
---

# quoteattr

Similar to `escape`, but also prepares *data* to be used as an
attribute value.  The return value is a quoted version of *data* with any
additional required replacements. `quoteattr` will select a quote
character based on the content of *data*, attempting to avoid encoding any
quote characters in the string.  If both single- and double-quote characters
are already in *data*, the double-quote characters will be encoded and *data*
will be wrapped in double-quotes.  The resulting string can be used directly
as an attribute value::

   >>> print("<element attr=%s>" % quoteattr("ab ' cd \" ef"))
   <element attr="ab ' cd &quot; ef">

This function is useful when generating attribute values for HTML or any SGML
using the reference concrete syntax.
