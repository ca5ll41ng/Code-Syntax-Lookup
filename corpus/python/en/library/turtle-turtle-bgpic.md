---
id: "python-en-function-turtle-bgpic"
language: "python"
lang: "en"
category: "function"
name: "bgpic"
signature: "bgpic(picname=None)"
directive: "function"
module: "turtle"
source_url: "https://docs.python.org/3/library/turtle.html#turtle.bgpic"
license: "PSF"
updated: "2026-10-01"
---

# bgpic

:param picname: a string, name of an image file (PNG, GIF, PGM, and PPM)
                or `"nopic"`, or `None`

Set background image or return name of current backgroundimage.  If *picname*
is a filename, set the corresponding image as background.  If *picname* is
`"nopic"`, delete background image, if present.  If *picname* is `None`,
return the filename of the current backgroundimage. ::

   >>> screen.bgpic()
   'nopic'
   >>> screen.bgpic("landscape.gif")
   >>> screen.bgpic()
   "landscape.gif"
