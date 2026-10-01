---
id: "python-en-function-code-interactiveinterpreter"
language: "python"
lang: "en"
category: "function"
name: "InteractiveInterpreter"
signature: "InteractiveInterpreter(locals=None)"
directive: "class"
module: "code"
source_url: "https://docs.python.org/3/library/code.html#code.InteractiveInterpreter"
license: "PSF"
updated: "2026-10-01"
---

# InteractiveInterpreter

This class deals with parsing and interpreter state (the user's namespace); it
does not deal with input buffering or prompting or input file naming (the
filename is always passed in explicitly). The optional *locals* argument
specifies a mapping to use as the namespace in which code will be executed;
it defaults to a newly created dictionary with key `'__name__'` set to
`'__console__'` and key `'__doc__'` set to `None`.

Note that functions and classes objects created under an
`InteractiveInterpreter` instance will belong to the namespace
specified by *locals*.
They are only pickleable if *locals* is the namespace of an existing
module.
