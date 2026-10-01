---
id: "python-en-function-builtins-generator-send"
language: "python"
lang: "en"
category: "function"
name: "generator.send"
signature: "generator.send(value)"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#generator.send"
license: "PSF"
updated: "2026-10-01"
---

# generator.send

"Sends" a value into the generator function: the *value* argument becomes
the result of the current yield expression.

Otherwise, this method behaves like `~generator.__next__`: it resumes
the underlying function and either returns the next yielded value or raises
`StopIteration`.

When `send` is called to start the generator, it must be called
with `None` as the argument, because there is no current yield
expression that could receive the value.
