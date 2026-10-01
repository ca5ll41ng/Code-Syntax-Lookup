---
id: "python-en-function-turtle-getpen"
language: "python"
lang: "en"
category: "function"
name: "getpen"
signature: "getpen()"
directive: "function"
module: "turtle"
source_url: "https://docs.python.org/3/library/turtle.html#turtle.getpen"
license: "PSF"
updated: "2026-10-01"
---

# getpen

Return the Turtle object itself.  Only reasonable use: as a function to
return the "anonymous turtle":

```python
:skipif: _tkinter is None

>>> pet = getturtle()
>>> pet.fd(50)
>>> pet
<turtle.Turtle object at 0x...>
```
