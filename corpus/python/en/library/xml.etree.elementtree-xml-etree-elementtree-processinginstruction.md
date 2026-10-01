---
id: "python-en-function-xml-etree-elementtree-processinginstruction"
language: "python"
lang: "en"
category: "function"
name: "ProcessingInstruction"
signature: "ProcessingInstruction(target, text=None)"
directive: "function"
module: "xml.etree.elementtree"
source_url: "https://docs.python.org/3/library/xml.etree.elementtree.html#xml.etree.elementtree.ProcessingInstruction"
license: "PSF"
updated: "2026-10-01"
---

# ProcessingInstruction

PI element factory.  This factory function creates a special element that
will be serialized as an XML processing instruction.  *target* is a string
containing the PI target.  *text* is a string containing the PI contents, if
given.  Returns an element instance, representing a processing instruction.

Note that `XMLParser` skips over processing instructions
in the input instead of creating PI objects for them. An
`ElementTree` will only contain processing instruction nodes if
they have been inserted into to the tree using one of the
`Element` methods.
